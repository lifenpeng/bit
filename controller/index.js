var app = angular.module('lfp-app',['ngRoute']);
app.controller('myApp',['$scope','$http',function($scope,$http){
    $http({
        method:'POST',
        url:'http://localhost/public/data.php?msg=1'
    }).success(function(data,status,headers,config){
        console.log('success');
       // console.log(data.data);
        $scope.arr = data.data;
        console.log($scope.arr);
    }).error(function(data,status,headers,config){
        console.log('err');
    })
}])

