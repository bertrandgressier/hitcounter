'use strict';

angular.module('hitcounter', [])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('hitCounterInterceptor');
    })
    .factory('hitCounterInterceptor', function ($rootScope) {

        var hitCounterInterceptor = {
            counter: 0
        };

        hitCounterInterceptor.debounceBroadcastCounter = _.debounce(function () {
            $rootScope.$broadcast('hitCounterChange', hitCounterInterceptor.counter);
        }, 500);

        hitCounterInterceptor.request = function (request) {

            hitCounterInterceptor.counter++;
            hitCounterInterceptor.debounceBroadcastCounter();

            return request;
        };

        hitCounterInterceptor.reset = function () {
            hitCounterInterceptor.counter = 0;
        };

        $rootScope.$on('$routeChangeSuccess', function () {
            hitCounterInterceptor.reset();
        });

        return hitCounterInterceptor;
    })
    .directive('hitCounter', function () {

        return {
            restrict: 'E',
            replace: true,
            scope: {},
            link: function (scope, iElt) {
                scope.$on('hitCounterChange', function (event, counter) {
                    iElt.text(counter);
                });
            }
        };
    });
