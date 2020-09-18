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
	$("#dl_hidd").click(function(){
		$("#dl_btn").css("display","block");
		$("#zc_btn").css("display","none");
	});
	$("#zc_hidd").click(function(){
		$("#dl_btn").css("display","none");
		$("#zc_btn").css("display","block");
	});
	$(".btn_login_text").click(function(){
		$(".dl").show();
		$(".mb").show();
	});
	$(".btn_login").hover(function(){
//		console.log(document.body.offsetWidth);
		if(document.body.offsetWidth > 766){
			$("#user_infor").fadeToggle(500);
		}
	});
	$("#user_infor>ul>li").hover(function(){	//个人星系
		$(this).toggleClass("user_infor_li");
	});
	$("#guanbi").click(function(){
		$(".dl").hide();
		$(".mb").hide();
	});
	$("#zc_guanbi").click(function(){
		$(".dl").hide();
		$(".mb").hide();
	});
	$('#back').mouseover(function(){
		$('#back').css("bottom","40px");
	}).mouseout(function(){
		$('#back').css("bottom","30px");
	}).click(function(){
		$('html,body').animate({scrollTop:0},'slow');
	});
	if (sessionStorage["jzmm"] == 1) {						//判断上一次是否点击了记住密码
		$("#jzmm").attr("checked","checked");
	}else{
		$("#jzmm").removeAttr("checked","checked");
	}
	// if (sessionStorage["username"] && sessionStorage["password"]) {	//判断账号和密码是否已存储到浏览器中
	// 	$("h1").html("切换账号");
	// 	$("#username").val(sessionStorage["username"]);				//将存储在浏览器中的账号显示
	// 	if (sessionStorage["jzmm"] == 1) {							//如果上次登录选择了记住密码，则显示密码
	// 		$("#password").val(sessionStorage["password"]);
	// 	}
	// }
	
})
	