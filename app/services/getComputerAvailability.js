/**
 * Created by ishum on 11/20/16.
 */

/* service to get data from computer_availability API */
libraryApp.service('getComputerAvailability', function($http){

   this.async = function(){
       var url = "http://localhost:1337/app.library.uq.edu.au/api/computer_availability";
       return $http.get(url);
   }
});