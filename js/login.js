$(function () {
  let btn = $("#submit")
  let username = $("#username")
  let password = $("#password")
  const auth = new Auth()
  username.val("13719283454")
  password.val("qiuchuijie@0608")

  btn.click(() => {
    let usernameVal = username.val()
    let passwordVal = password.val()
    let count = 0

    if (usernameVal !== "") {
      if (/^1[345678]\d{9}$/.test(usernameVal)) {
        count+=1
        username.parent().removeClass("has-error")
        username.parent().addClass("has-success")
      } else {
        username.parent().addClass("has-error")
      }
    } else {
      username.parent().addClass("has-error")
    }

    if (passwordVal !== "") {
      if (/^[a-zA-Z0-9@_.]{6,18}$/i.test(passwordVal)) {
        count+=1
        password.parent().removeClass("has-error")
        password.parent().addClass("has-success")
      } else {
        password.parent().addClass("has-error")
      }
    } else {
      password.parent().addClass("has-error")
    }

    if (count === 2) {
      count = 0
      console.log(usernameVal)
      console.log(passwordVal)

      $.ajax({
        url: "http://localhost:8989/api/login/",
        type: "post",
        dataType: "json",
        data: {
          "username": usernameVal,
          "password": passwordVal
        },
        success: res => {
          if (res.code == 200) {
            console.log(res)
            auth.setUserToken(res.user, res.token)
          } else {
            console.log("登录失败")
          }
        }
      })
    }
  })

  let isUser = localStorage.getItem(USER_KEY)
  if (isUser) {
    console.log("登录成功")
  } else {
    console.log("登录失败")
  }
})