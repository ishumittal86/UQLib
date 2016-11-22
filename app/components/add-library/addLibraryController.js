/**
 * Created by ishum on 11/20/16.
 */

libraryApp.controller('addLibraryController', function($scope, $mdDialog){
    $scope.addLibrary = function(){
        if ($scope.libraryForm.$valid){
            $scope.showAlert();

            $scope.details = angular.copy({});
            $scope.libraryForm.$setPristine();
            $scope.libraryForm.$setValidity();
            $scope.libraryForm.$setUntouched();
        }
    };

    $scope.showAlert = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Success')
                .textContent('Library details have been successfully added.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Close')
                .targetEvent(ev)
        );
    };
});