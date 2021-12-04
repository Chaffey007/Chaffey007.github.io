(function() {
    'use strict';
    var myApp = angular.module('Body');

    //... Scroll ...
    myApp.directive('pageScroll', ['scrollPageService', function(scrollPageService, $rootScope){
        return{
            link: function(scope, elem, attrs){

                angular.forEach(['DOMMouseScroll','mousewheel','scroll','touchmove'], function(EventName){
                    elem.bind(EventName, function(e){
                        scrollPageService.pageOnScroll('mouse', e)
                    });
                });

            }
        }
    }]);

})();