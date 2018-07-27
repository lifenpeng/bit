var app = angular.module('lfp-app',['ui.router']);
app.controller('myApp',['$scope','$http','$location','indexData',function($scope,$http,$location,indexData){
	
	//$location.url('/index');
	
    indexData.then(function(data){
         $scope.arr = data.data;
         //console.log($scope.arr);
    }) 
	

    $scope.getId = function(){
       $scope.id =  angular.element(this)[0].v['id']; 
       $location.url('/article/?'+$scope.id);
    }
}])

