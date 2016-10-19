var data = [{
    name: "红米Note 4",
    brief: "Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量",
    price: "899元 起",
}, {

    name: "红米Pro",
    brief: "硬件级实时背景虚化 / Helio X20 十核旗舰处理 / 5.5” OLED 超鲜艳屏幕 /拉丝全金属机身",
    price: "1499元 起",
}, {

    name: "红米Note 3",
    brief: "指纹识别 / 全网通双卡双待 / 金属机身 / 4100mAh大电池",
    price: "899元 起",
}, {
    name: "红米Note",
    brief: "【9.22早10点开售！】金属机身 / 指纹识别 / 4050mAh大电池 / 5.5英寸全高清屏",
    price: "799元 起",

}, {
    name: "小米Max全网通",
    brief: "6.44大屏黄金尺寸 / 4850mAh 大电量 / 指纹识别 / 2.5D玻璃",

    price: "1299元 起",

}];
var txt = document.querySelector('#txt');
var list = document.querySelector("#list")

txt.onkeyup = function() {
    var result = data.filter(function(item) {

        if (item.name.toLowerCase().indexOf(txt.value.toLowerCase()) > -1 ||
            item.brief.toLocaleLowerCase().indexOf(txt.value.toLowerCase()) > -1) {
            return item;

        }

    });

    initCtrl(result);
}

initCtrl(data);

  function initCtrl(data){

  var strHtml='';

  data.forEach(function(item){
    strHtml+=`<div class="section" >
          <div class="J_linksign-customize">
              <div class="item">
                  <div class="img">
                      <img src="http://i8.mifile.cn/v1/a1/4aacc5da-805f-b877-d9b5-77487aaaf36f.png" alt="">
                  </div>
                  <div class="info">
                      <div class="name">
                        ${item.name}
                      </div>
                      <div class="brief">
                          ${item.brief}
                      <div class="price">
                          ${item.price}
                      </div>
                  </div>
              </div>
          </div>
      </div>`;

  });
list.innerHTML=strHtml;

  }
