var txt =document.querySelector('#txt');
var list =document.querySelectorAll("#list")


//初始化list控件
function initCtr(data){
  var strHtml='';
  data.forEach(function(item)

{
 strHtml+'<div>'+item.name+'</div>';

});
list.innerHTML=strHtml;
}

initCtr(data);

//为文本添加键盘事件
txt.onkeyup=function(e){
var str =txt.value;
var result = data.filter(function(item) {
if(item.name.toLocaleLowerCase(str.toLowerCase())>-1){
  return item;
}
});
initCtr(result);

}
