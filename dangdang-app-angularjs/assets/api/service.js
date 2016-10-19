app.factory('commonService',['$http',function($http){
var service={};
/**
 * 根据分类信息取数据
 * @param  {[type]} type     [description]
 * @param  {[type]} callBack [description]
 * @return {[type]}          [description]
 */
service.getData=function(type,callBack){
 $http({
 url:'../../data/book_'+type+'.json',
 method:'get'

 })
 .then(function(res){
   console.log('获取数据成功');
 callBack(res);

 },function(err){

    console.dir(err);
 })
}
}])
