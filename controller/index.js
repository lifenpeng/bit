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
    $scope.goPage = function(v){
        //获取要显示页数
        $scope.pageNum = angular.element(this)[0].v||1;

        $scope.flag = false; 
        
        var next;
  
        if(v==2){ //下一页
            init();
            next>0&&next<$scope.size.length?next =parseInt(next)+1:next;
            artData(parseInt(next)); 
        }else if(v==1){ //上一页
            init();
            next>1&&next<$scope.size.length+1?next =parseInt(next)-1:next;
            artData(parseInt(next));             
        }else{
            //获取该页数据
            artData($scope.pageNum);   
        }
        //上下页初始化数据
        function init(){
            if($scope.pageNum>1){
                sessionStorage.setItem('next', $scope.pageNum);
            }else{
                sessionStorage.setItem('next', 1);
            } 
            next = sessionStorage.getItem('next');
        }
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

