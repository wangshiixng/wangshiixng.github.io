// JavaScript Document
$(function(){
	document.addEventListener("touchstart", function(){}, true)
	setInterval(function(){
	   _first=$(".news .n2 .item:first");
	   _first.show().animate({marginTop:-40+'px'},600,function(){
		   _first.css('marginTop','0').appendTo($(".news .n2"))
	   })
	},4000);

    var $num=$("#circle li").length;
	for(i=0;i<$num;i++){
		$('#circle li').eq(i).addClass('item'+(i+1));
	}
	function item1(){
		var $num=$("#circle li").length;
		for(i=0;i<$num;i++){
			$('.bounceInUp li').eq(i).css({"-webkit-animation-delay":(i+1)/10+'s',"animation-delay":(i+1)/10+'s'})
		}
	}
	function item2(){
		$('.bounceOutDown li').css({"-webkit-animation-delay":'0.4s',"animation-delay":'0.4s'})
	}

	$('.con .con-b li').each(function(){
		s=$(this).find('img').attr('data-original')
		if(s!=''){ $(this).find('img').show()}else{$(this).find('img').attr('data-original','http://wdt.xmnn.cn/images/pic.png')}
	})

    var s1=$(".show .im").find('img').attr('src')
	if(s1 != ''){ $(".show .im").find('img').show()}else{$(".show .im").find('img').attr('src','http://wdt.xmnn.cn/images/pic.png')}

	var pc_h=$(window).height();
	$(".pc-body").height(pc_h);
    $("#circle ul").height(pc_h-60);
	function is_Location(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/iPad/i)=="ipad" || ua.match(/Mobile/i)=="mobile") {
			//$(".pc-body").hide();$(".wap").show();
		    $("#menu").tap(function(){
				$("#circle").fadeIn().addClass("bounceInUp").removeClass("bounceOutDown");
				item1()
			})
			$("#off").tap(function(){
				$("#circle").addClass("bounceOutDown").removeClass("bounceInUp").delay(1000).fadeOut();
				item2()
			})
		}else{
			//$(".pc-body").show();$(".wap").show();
       		$("#menu").click(function(){
				$("#circle").fadeIn().addClass("bounceInUp").removeClass("bounceOutDown");
				item1()
			})
			$("#off").click(function(){
				$("#circle").addClass("bounceOutDown").removeClass("bounceInUp").delay(1000).fadeOut();
				item2()
			})
		}
	}
	is_Location()

	var w=$(window).width()-20;
	var iframeHeight=w*280/496;
	$("iframe").height(iframeHeight)

})
