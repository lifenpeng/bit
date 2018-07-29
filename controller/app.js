app.controller('article',['$scope','data','$sce','$location','$state',function($scope,data,$sce,$location){
    var arr = [];
    var datas  = [];
	
    data.article().then(function(data){
        arr = data.data;

        //console.log(arr);

        var aid = $location.url();
        var num = aid.split("?");
        
        for(v in arr){
            if(arr[v].id==num[1]){
               datas = arr[v];
            }
         }
    
         if(datas){
            $scope.title = datas.title;
            $scope.time = datas.time;
            $scope.from = datas.from;
            $scope.content = $sce.trustAsHtml(datas.content);
         }
    }) 

}])