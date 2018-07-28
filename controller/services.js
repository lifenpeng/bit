app.service('indexData',function($http) { 
    return $http({
            method:'POST',
            url:'http://localhost/public/data.php?msg=1'
        }).then(function(response){
            return response.data;
        })
    

    // return $http.post('http://localhost/public/data.php?msg=1').then(function(response){
    //       //console.log(response.data);
    //       return response.data;
    // })

});


