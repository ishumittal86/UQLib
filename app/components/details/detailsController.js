/**
 * Created by ishum on 11/20/16.
 */

/* Controller to display the details of a library */

libraryApp.controller('detailsController', function($scope, $filter, $routeParams){

    var details = [],
        lists = [],
        id = $routeParams.id;

    /*get the computer availability API data from main controller
    * if main controller has not already run, then wait for the call to be run and then have the data broadcasted*/
    details = $scope.$parent.details;

    if (details.length ==0){
        $scope.$on('passDetails', function(){
            details = $scope.$parent.details;
        });

    }

    /*get the library hours API data from main controller
     * if main controller has not already run, then wait for the call to be run and then have the data broadcasted*/

    lists = $scope.$parent.lists;

    if (lists.length ==0){
        $scope.$on('passHours', function(){
            lists = $scope.$parent.lists;
        });
    }

    /*get the id from url to find the matching object from hours API and populate data in tabs*/
    var matchingList = $filter('filter')(lists, { lid: id });
    $scope.name = matchingList[0].name;
    $scope.departments = matchingList[0].departments;
    $scope.currently_open = matchingList[0].times.currently_open;
    $scope.url = matchingList[0].url;
    $scope.fn = matchingList[0].fn;
    $scope.contact = matchingList[0].contact;
    var convertedName = matchingList[0].name.replace('&', '&amp;');

    /*get the name from hours API to find the matching object from availability API */
    var matchingAvailability = $filter('filter')(details, {library: convertedName});

    $scope.total = 0;
    $scope.available = 0;

    if (matchingAvailability.length == 0){
        $scope.info = false;
    }
    else{
        for(item in matchingAvailability[0].availability){
            $scope.total += matchingAvailability[0].availability[item].Available;
            $scope.available += matchingAvailability[0].availability[item].Occupied;
        }
        $scope.info = true;
    }


});