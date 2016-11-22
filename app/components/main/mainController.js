/**
 * Created by ishum on 11/18/16.
 */

/*main controller to call the service APIs */
libraryApp.controller('mainController', function($scope, getHours, getComputerAvailability){

    $scope.lists= [];
    $scope.details = [];

    getHours.async().then(function(response){
        $scope.lists = response.data.locations;
        $scope.$broadcast('passHours');
    });

    getComputerAvailability.async().then(function(response){
        $scope.details = response.data;
        $scope.$broadcast('passDetails');
    })
});