var app = angular.module('lfp-app',['ui.router']);
app.controller('myApp',['$scope','$location','$state','data',function($scope,$location,$state,data){

    //获取数据总数 存入 sessionStorage
    data.article().then(function(data){
        var page = data.data;
        sessionStorage.setItem('page', page.length);
    })

    //计算文章页数 
    var num = sessionStorage.getItem('page')/8;
    sessionStorage.getItem('page')%8>0?num+1:num;
    var pageSize = [];
    for(var i =0;i<num;i++){
       pageSize.push(i+1);
    }

    //文章页数
    $scope.size = pageSize;
    
    //控制默认显示第一页
    $scope.flag =true;

    //分页点击事件
    $scope.goPage = function(){
        $scope.flag = false;
        //获取要显示页数
        $scope.pageNum = angular.element(this)[0].v;
        //获取该页数据
        artData($scope.pageNum);         
    }
    
    //获取第一页数据  默认显示
    if($scope.flag){
        artData(1);
    }

    //获取某条文章详细信息 跳转到文章模块
    $scope.getId = function(){
       $scope.id =  angular.element(this)[0].v['id']; 
       $location.url('/article/?'+$scope.id);
    }

    //回到首页事件
    $scope.goIndex = function(){
        artData(1);
        $location.url('/index');
    }

    //获取文章数据
    function artData(v){
        data.getPage(v).then(function(data){
            $scope.arr = data.data;
        })  
    }

}])

