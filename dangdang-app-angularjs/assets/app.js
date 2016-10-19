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
.when({
          templateUrl:'./assets/tpl/about_me.html',
          controller:''
        })

  otherwise({
  redirectTo:'/'

  })
})]
