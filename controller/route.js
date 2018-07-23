app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/index',{
        templateUrl:'./view/index/content.html',
        controller:'myApp'
    }).otherwise({redirectTo:'/index'});
}])