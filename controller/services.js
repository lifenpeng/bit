app.service('data',function($http){
   this.getPage = function(v){
       v=v||1;
       return $http({
        method:'POST',
        url:'http://localhost/public/data.php?msg=1&&page='+v
        }).then(function(response){
            return response.data;
        })
   }

   this.article = function(){
    return $http({
        method:'POST',
        url:'http://localhost/public/data.php?msg=1'
        }).then(function(response){
            return response.data;
        })      
   }
})


