var Cralwer=require('crawler')
var url=require('url')
var fs=require('fs')

var c=new Cralwer({
  maxConnections: 10,
  forceUTF8: true,
  incomingEncoding: 'gb2312'
})
const common=require('./common');
const bookTypes=common.bookTypes;

bookTypes.forEach(function(item){
  loadData(item.base_url,item.id,item.page_count);
})

function loadData(baseUrl,type,pageCount){
  var arrBook=[];
  getData(baseUrl,1);
  function getData(url, page) {
c.queue([{
     uri:url+page,
     callback:(err,result,$)=>{
   console.log(result.uri)

     $('.bang_list li').each((index,li)=>{
   var obj=decodeBookData($(li));
   arrBook.push(obj)

     })
if(page>=pageCount){
  fs.writeFileSync(`./data/book_${type}.json`,JSON.stringify(arrBook))
   console.log('获取数据成功');

}else{
    getData(url,page+1)
 }
  }
}])
  }

}
function decodeBookData($item){

  var obj = {}
      obj.title = $item.find('.name').text()
      obj.img = $item.find('.pic img').attr('src')
      obj.author = $item.find('.publisher_info').eq(0).text()
      obj.publister = $item.find('.publisher_info').eq(1).find('a').text()
      obj.publist_time = $item.find('.publisher_info').eq(1).find('span').text()
      obj.link = $item.find('.pic a').attr('href')
      obj.price = $item.find('.price .price_n').text()
      return obj


}
