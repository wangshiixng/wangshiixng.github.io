
app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes = [
    {id:'ertong',name:'儿童',img:'http://img3x6.ddimg.cn/7/21/23546266-1_l_6.jpg',description:'儿童经验学'},
    {id:'lishi',name:'历史',img:'http://img3x2.ddimg.cn/14/6/23580032-1_l_2.jpg',description:'重要历史记录载册，观天下历史大事'},
    {id:'dongman',name:'动漫',img:'http://img3x3.ddimg.cn/71/18/23980643-1_l_15.jpg',description:'画质精品，特技精湛'},
    {id:'qingchunwenxue',name:'青春文学',img:'http://img3x6.ddimg.cn/95/9/23494676-1_l_20.jpg',description:'史书文雅，谈清风柳絮飘飘下'}
  ];
}]);
