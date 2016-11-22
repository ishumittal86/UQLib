/**
 * Created by ishum on 11/20/16.
 */

/*REST API call to get the library_hours */

libraryApp.service('getHours', function($http){

    this.async = function(){

        var url = 'http://localhost:1337/app.library.uq.edu.au/api/v2/library_hours';
        return $http.get(url);

    }
});