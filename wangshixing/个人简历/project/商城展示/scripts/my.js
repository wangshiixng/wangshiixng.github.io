$(function(){

//表单失去焦点获得焦点功能
	$("#input_search").focus(function(){
		if(this.value==this.defaultValue){
			this.value="";
		}
	})
	.blur(function(){
		if(this.value==""){
			this.value=this.defaultValue;
		}
	})
	.keyup(function(e){
		if(e.which==13){
			alert("回车提交表单！");
		}
	});

//换肤功能
    $("#skin li").click(function(){
    	var href="styles/skin/"+this.id+".css";
    	$("#skin_style").attr("href",href);
    	$(this).addClass("selected")
    	       .siblings().removeClass("selected");
    });

//导航效果
    $("nav li").hover(function(){
    	$(this).find(".jnNav").show();
    },function(){
    	$(this).find(".jnNav").hide();
    });

 //轮播图
    var len= $(".scrollItem a").length;
    var index=0;
    var adTimer;
    $(".scrollItem a").mouseover(function(){
        index=$(".scrollItem a").index(this);
        showImg(index);
    }).eq(0).mouseover();

    $(".scrollItem").hover(function(){
        if(adTimer){
        clearInterval(adTimer);
        }
    },function(){
        adTimer=setInterval(function(){
        showImg(index);
        index++;
        if(index==len){index=0;}
    }, 5000);
    }).trigger("mouseleave");

    function showImg(index){
        $(".scrollItem a").eq(index).addClass("chos")
               .css("opacity","1")
               .siblings().removeClass("chos")
               .css("opacity","0.7");
        $("#jnImageScroll img").eq(index).stop(true,true).fadeIn()
                           .siblings().hide();
    }

//品牌选项卡
    $(".jnBrandTab li").click(function(){
    	var index=$(".jnBrandTab li").index(this);
    	$(this).addClass("chos")
    	       .siblings().removeClass("chos");
    	$(".BrandItem").stop(true,true).animate({left:-index*790+"px"},2000);
    	return false;
    }).eq(0).click();


//超链接提示
    var x=10,y=10;
    $(".jnNoticeInfo a").mouseover(function(e){
        this.mytitle=this.title;
        this.title="";
        var tooltip="<div id='tooltip'>"+this.mytitle+"</div>";
        $("body").append(tooltip);
        $("#tooltip").css({"left":e.pageX+x+"px","top":e.pageY+y+"px"}).show("fast");
    })
    .mousemove(function(e){
        $("#tooltip").css({"left":e.pageX+x+"px","top":e.pageY+y+"px"});
    })
    .mouseout(function(){
        this.title=this.mytitle;
        $("#tooltip").remove();
    });

//右侧下部光标划过产品列表效果
    $(".BrandItem li>a").each(function(index){
        var $img=$(this).find("img");
        var img_w=$img.width();
        var img_h=$img.height();
        var spanHtml="<span style='position:absolute;top:0;left:5px;width:"+img_w+"px;height:"+img_h+"px' class='imgMask'></span>";
        $(spanHtml).appendTo(this);
    });
    $(".BrandItem li").find(".imgMask").live("hover",function(){
        $(this).toggleClass("imageOver");
    });

//放大镜特效
    $('.jqzoom').jqzoom({
        zoomType: 'standard',
        lens:true,
        preloadImages: false,
        alwaysOn:false,
        zoomWidth: 340,
        zoomHeight: 340,
        xOffset:10,
        yOffset:0,
        position:'right'
    });

/*点击小图切换大图*/
    $("#jnProitem ul.imgList li a").bind("click",function(){
        var imgSrc=$(this).find("img").attr("src");
        var i=imgSrc.lastIndexOf(".");
        var unit=imgSrc.substring(i);
        imgSrc=imgSrc.substring(0,i);
        var imgSrc_big=imgSrc+"_big"+unit;
        $("#thickImg").attr("href",imgSrc_big);
    });
//产品介绍选项卡
    $(".tab_menu li").click(function(){
        var index=$(".tab_menu li").index(this);
        $(this).addClass("selected")
            .siblings().removeClass("selected");
        $(".tab_box div").eq(index).show()
                         .siblings().hide();
    }).eq(0).click();

//选择颜色
   $(".color_change li").click(function(){
    $(this).addClass("hover")
           .siblings().removeClass("hover");
           var colordes=$(this).find("img").attr("alt");
           var imgSrc=$(this).find("img").attr("src");
           var i=imgSrc.lastIndexOf(".");
           var unit=imgSrc.substring(i);//".jpg"
           var imgSrc=imgSrc.substring(0,i);//"images/pro_img/blue"
           var color=imgSrc.replace("images/pro_img/","");//color
           listClass=".imgList_"+color;
           $(".imgList li").hide();
           $(".imgList").find(listClass).show();
           $(".imgList").find(listClass).eq(0).find("a").click();
           $(".color_change strong").text(colordes);
    });

   //尺寸选择
   $(".pro_size li").click(function(){
       var value=$(this).text();
       $(".pro_size strong").text(value);
       $(this).addClass("selected")
              .siblings().removeClass("selected");
   });

   //数量和价格联动
   $("#num_sort").change(function(){
       var num=$(this).val();
       var price=$(".pro_price strong").text();
       var amount=num*price;
       $(".pro_price strong").text(amount);
   }).change();

    //评分
    $("ul.rating a").click(function(){
        var num=$(this).parent().attr("class");
        var starclass="rating "+num+"star";
        var title=$(this).attr("title");
        alert("您给此商品的评价是"+title);
        $("ul.rating").removeClass().addClass(starclass);
        return false;
    });

    //完成购买
    $("#cart img").click(function(){
        var pro_name=$(".jnProDetail h4").text();
        var pro_size=$(".pro_size strong").text();
        var pro_color=$(".color_change strong").text();
        var pro_num=$("#num_sort").val();
        var pro_price=$(".pro_price strong").text();
        var dialog = "感谢您的购买。<div style='font-size:12px;font-weight:400;'>您购买的产品是："+pro_name+"；"+
                "尺寸是："+pro_size+"；"+
                "颜色是："+pro_color+"；"+
                "数量是："+pro_num+"；"+
                "总价是："+pro_price +"元。</div>";
        $("#jnDialogContent").html(dialog);
        $("#basic-dialog-ok").modal();
        return false;
    });


});
