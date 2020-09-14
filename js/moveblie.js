$(function(){
	move();
	function move(){
		$("#menu").click(function(){
			// $(".nav").toggleClass("block");
			$(".nav").slideToggle(300);
		})
		// if (document.body.offsetWidth <= 992) {
		// 	$(".nav").addClass("nav nav-tabs nav-stacked");
		// 	$(".nav").children().css("background","#fff").addClass("btn btn-block");;
		// 	$(".nav>a").removeClass("btn_login").addClass("btn btn-info btn-block btn_login_moveblie");
		// }
	}
	$("#dl").click(function(){
		$(".dl").show();
		$(".mb").show();
	});
	$("#guanbi").click(function(){
		$(".dl").hide();
		$(".mb").hide();
	});

	if (sessionStorage["jzmm"] == 1) {						//判断上一次是否点击了记住密码
				$("#jzmm").attr("checked","checked");
			}else{
				$("#jzmm").removeAttr("checked","checked");
			}
			$("#submit").click(function(){					//提交后见数据保存到浏览器
				console.log($("#username").val());
				console.log($("#password").val());
				if ($("#jzmm").is(":checked")) {
					sessionStorage.jzmm = 1;
				}else{
					sessionStorage.jzmm = 0;
					$("#jzmm").removeAttr("checked");
				}
				if (window.sessionStorage) {
					sessionStorage.username = $("#username").val();
					sessionStorage.password = $("#password").val();
					parent.location.reload();
					window.location.reload();
					alert("1");
				}else{
					alert("NOT strong");
				}
			});
			if (sessionStorage["username"] && sessionStorage["password"]) {	//判断账号和密码是否已存储到浏览器中
				$("h1").html("切换账号");
				$("#username").val(sessionStorage["username"]);				//将存储在浏览器中的账号显示
				if (sessionStorage["jzmm"] == 1) {							//如果上次登录选择了记住密码，则显示密码
					$("#password").val(sessionStorage["password"]);
				}
			}
})
	