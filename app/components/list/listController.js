/**
 * Created by ishum on 11/17/16.
 */

/* Controller to display the list of libraries */

libraryApp.controller('listController', function($scope) {

    $scope.lists = [];

    if ($scope.$parent.lists){
        $scope.lists = $scope.$parent.lists;
    }
    if ($scope.lists.length == 0){
        $scope.$on('passHours', function(){
            $scope.lists = $scope.$parent.lists;
        });
    }


});