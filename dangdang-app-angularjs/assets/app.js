var app =angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
     templateUrl:'./assets/tpl/index.html',
     controller:''

  })
.when('/blog',{
  templateUrl:'./assets/tpl/blog.html',
  controller:''

})
.when('/book',{
  templateUrl:'./assets/tpl/book.html',
  controller:'bookController'

})
.when('/about-me',{
      templateUrl:'./assets/tpl/about-me.html',
      controller:''
      })
.when('/book_list/:id',{
   templateUrl:'./assets/tpl/book_list.html',
   controller:'bookListController'
})
  .otherwise({
  redirectTo:'/'
})
}])
