app.controller('mainController', ['$scope', 'commonService',function($scope, c_service) {
    // c_service.getData('ertong', function(res) {
    //     console.dir(res);
    // });
    // 设置底部导航切换效果展示
    $scope.selectedIndex = 0;
    $scope.linkTo = function(index){
      $scope.selectedIndex = index;
    };
}]);
