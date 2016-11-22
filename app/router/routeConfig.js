/**
 * Created by ishum on 11/17/16.
 */

/*router configuration for routing the application */

libraryApp.config(function($routeProvider){

    $routeProvider

        .when('/new', {
            templateUrl: './app/components/add-library/add-library-view.html',
            controller: 'addLibraryController'
        })
        .when('/:id', {
            templateUrl : './app/components/details/details-view.html',
            controller: 'detailsController'
        })
        .otherwise({
            templateUrl : './app/components/list/list-view.html',
            controller: 'listController'
        });
});