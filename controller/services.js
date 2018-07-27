app.service('indexData',function($http) { 
    // return{
    //     info:$http({
    //         method:'POST',
    //         url:'http://localhost/public/data.php?msg=1'
    //     }).success(function(data,status,headers,config){
    //         console.log(data.data);
    //     }).error(function(data,status,headers,config){
    //         console.log('err');
    //     })
    // } 

    return $http.post('http://localhost/public/data.php?msg=1').then(function(response){
          //console.log(response.data);
          return response.data;
    })

});


