$(function(){
  // logo
  $('#logoInfo').mouseenter(function(){
     $(this).find("ul").toggle();
  })
	// section 切换
	$("aside li").click(function(){
		var i =$(this).index()+1;
		if(i>$("section").length) return;
		$("section").filter(":visible").addClass("hide").fadeOut(500).parent().children().eq(i).removeClass("hide").fadeIn(1000);
	})
	// section 切换
    // about me
     $(".imginfo").mouseenter(function(){
         // $(this).css({border:"4px solid #98DE8B",background:"white"});
    	$(this).find("img").animate({top:"-60px", opacity:"0"},300,function(){
    		$(this).css({top:"65px"});
			$(this).animate({top:"10px", opacity:"1"},300);
    	});
    })
     // about me
     //skill
           $(".skill_icon").click(function(){
           	   $(this).parent().siblings().children(".skill_int").addClass("hide");
           	   // $(".skill_int").addClass("hide");
           	   if($(this).siblings(".skill_int").hasClass("hide")){
           	   	   $(this).siblings(".skill_int").removeClass("hide");

           	   }
           	   else{
           	   	   $(this).siblings(".skill_int").addClass("hide");
           	   }
           })
      //skill
      // demo
         $(".demo_details").mouseover(function(){
         	console.log($(this).children());
            $(this).children().removeClass("hide");
         }).mouseout(function(){
         	$(this).children(".box_hover").addClass("hide");
         })
      // demo
})
