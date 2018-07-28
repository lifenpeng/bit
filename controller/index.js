var app = angular.module('lfp-app',['ui.router']);
app.controller('myApp',['$scope','$location','indexData','$state',function($scope,$location,indexData,$state){
	
    indexData.then(function(data){
        $scope.arr = data.data;
    }) 

    $scope.getId = function(){
       $scope.id =  angular.element(this)[0].v['id']; 
       $location.url('/article/?'+$scope.id);
    }

    $scope.goIndex = function(){
        $state.go('index');
    }

}])

