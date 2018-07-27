app.controller('article',['$scope','indexData','$sce','$location',function($scope,indexData,$sce,$location){
    $scope.arr;
	$scope.datas;
	
    indexData.then(function(data){
        $scope.arr = data.data;
		console.log(data.data);
		console.log($scope.arr,data.data);
    }) 
	
    
	var aid = $location.url();
	var num = aid.split("?");
	
    for(var v in $scope.arr){
        if($scope.arr[v].id==num[1]){
           $scope.datas = $scope.arr[v];
        }
     }
     
     $scope.title1 = $scope.datas.title;
     $scope.time = $scope.datas.time;
     $scope.from = $scope.datas.from;
     $scope.content = $sce.trustAsHtml($scope.datas.content);
	 

}])