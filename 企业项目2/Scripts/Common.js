
//请求连接参数分割
$UrlParameter = function(_key) {
	//debugger
	var _url = window.location.search;
	//如果不等于空表示存在参数
	if (_url.length != 0) {
		//清除问号字符
		_params = _url.replace('?', "").split('&');
		for (var i = 0; _p = _params[i]; i++) {
			_params[_p.split('=')[0]] = _p.split('=')[1];
		}
		//是否返回固定参数值
		if (_key && _key.length != 0) {
			return _params[_key];
		}
		//否则返回对象集合
		return _params;
	}
}
//Ajax对象
/*参数
Method;//方法 Get | Post
Url;//请求连接
Param;//请求参数
Error();//错误处理
Success();//处理成功
Complete();//完成操作
*/
$Ajax = function (_sender) {
    var xmlhttp = undefined;
    //验证是否IE浏览器
    if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } //非IE浏览器
    else if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        alert("Error:Your broswer not support XMLHttpRequest!");
        //throw new Error("Error:Your broswer not support XMLHttpRequest!");
        return;
    }
	if(xmlhttp.overrideMimeType && _sender.ResultType != "HTML"){
		xmlhttp.overrideMimeType("text/xml");  //此处应该将text/html修改成text/xml,否则会出现问题的
	}
    xmlhttp.open(_sender.Method, _sender.Url +"?"+ _sender.Param, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-Length", (_sender.Url.length) + _sender.Param.length);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {//那么如何知道是否调用成功呢，状态为200说明调用成功，500则说明出错
            try {
                var result = undefined;
                switch (_sender.ResultType) {
                    case "Object":
                        result = xmlhttp;
                        break;
                    case "XML":
                        result = xmlhttp.responseXML;
                        break;
                    case "HTML":
                    default:
                        result = xmlhttp.responseText;
                        break;
                }
                //加载成功
                _sender.Success(result);
                //加载完成
                _sender.Complete();
            } catch (e) {
                //错误提示
                //_sender.Error(e);
            }
            //撤销对象
            xmlhttp.abort();
        }
    }
    xmlhttp.send(null);
}
//Xml对象
/*参数
Url;//请求连接
IsAsync;//是否异步请求
Error();//错误处理
Success();//处理成功
Complete();//完成操作
*/
$Xml=function(_sender){
	var _xml = undefined;
    //验证是否IE浏览器
    if(window.ActiveXObject){
        var xmlArray = ["MSXML2.DOMDocument.6.0","MSXML2.DOMDocument.5.0","MSXML2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML2.DOMDocument","Microsoft.XMLHTTP"];
        try{
            for( var i=0; i < xmlArray.length ; i++ ){
                _xml = new ActiveXObject(xmlArray[i]);
                break;
            }
        }catch(e){}
    }//非IE浏览器
    else if(document.implementation && document.implementation.createDocument){
        _xml = document.implementation.createDocument("","",null);
    }
    else{
		alert("Create XML Document Object Mode Error! Plase Contact Us");
        throw new Error("Create XML Document Object Mode Error! Plase Contact Us");
		return;
    }
	//是否异步
    _xml.async = _sender.IsAsync?_sender.IsAsync:false;
	//加载文件
    _xml.load(_sender.Url);
    try{
		//firefox暂不支持错误提示
		if(_xml.parseError.line != 0){
			var outError = "错误信息:"+_xml.parseError.reason+"\r\n" //错误信息
			outError += "错误节点:"+_xml.parseError.srcText+"\r\n" //错误节点
			outError += "错误资源:"+_xml.parseError.url+"\r\n" //错误资源
			outError += "错误行数:"+_xml.parseError.line+"\r\n" //错误行数
			alert(outError);
        	throw new Error(outError);
		}
    }catch(e){}
	//返回对象
    return _xml;
}



//input
function inputFocus(obj,text){
	obj.focus(function(){
		if($(this).val()==text){
           $(this).val("");
        }
	}).blur(function(){
		if($(this).val()==""){
           $(this).val(text);
        }
	})
}

//导航菜单
$(document).ready(function(){
    $(".nav-menu>ul>li").hover(function(){
        $(this).children("ul").slideDown("fast");
        currobj.removeClass("current");
    },function(){
        $(this).children("ul").slideUp("fast");
        currobj.addClass("current");
    })
	var can = window.location.href.split("/")[3];
	if(can){
		var currobj = $(".nav-menu a[href*='"+can+"']").parent("li");
		    currobj.addClass("current");
		var curr = currobj.index();
	}

	//圆角
    $(".border,.border2").Rounded();

	//左边菜单
	$(".subnav li div").hide();
	//$(".subnav li:has(div)").hover(function(){
	//	if($(this).children("div").is(":hidden")){
	//		$(this).parent().addClass("current").end().children("div").fadeIn();
	//	}else{
	//		$(this).parent().removeClass("current").end().children("div").fadeOut();

	//	}
	//})

	$(".subnav li").hover(function(){
	    $(this).children("div").stop().animate({opacity:1},"fast").css("display","block");
	},function(){
	    $(this).children("div").stop().animate({opacity:0},"fast");
	})
	$(".subnav li ul li:last-child").addClass("last");

	var can2 = window.location.href.split("/")[4];

	function submenuhover(){
	    //if($(".subnav div").length!=0){
	        $(".subnav a[href*='"+can2+"']").parent("li").addClass("current");
	    //}
	}
	submenuhover();

})

//tab 切换
var tab ={
	tabControler:function(btn,layer,className){
		btn.each(function(index){
			$(this).mouseover(function(){
				$(this).addClass(className).siblings().removeClass(className);
				layer.eq(index).show().siblings().hide();
			})
		})
	}
}
