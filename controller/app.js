app.controller('article',['$scope','indexData','$sce','$location','$state',function($scope,indexData,$sce,$location,$state){
    var arr = [];
    var datas  = [];
	
    indexData.then(function(data){
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