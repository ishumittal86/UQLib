/**
 * Created by ishum on 11/22/16.
 */


describe('listTest',function(){

    //load library app module
    beforeEach(module('libraryApp'));

    var listController,rootScope;
    var mainController,rootScopeMain,getHours,getComputerAvailability;

    //inject list controller
    beforeEach(inject(function($rootScope,$controller){
        rootScope = $rootScope.$new();
        listController = $controller('listController',{
            $scope:rootScope
        });
    }));

    ////inject main controller
    //beforeEach(inject(function($rootScope,$controller,_getHours_,_getComputerAvailability_){
    //    rootScopeMain = $rootScope.$new();
    //    getHours = _getHours_;
    //    getComputerAvailability = _getComputerAvailability_;
    //    mainController = $controller('mainController',{
    //        $scope:rootScopeMain
    //    });
    //}));
//testing library list is empty
    describe('libraryListZeroTest',function(){
       it('get library list',function(){
           expect(rootScope.lists.length).toBe(0);
       })
    });
})