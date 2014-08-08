'use strict';

describe('hit counter directive', function () {

    var scope, elt;

    beforeEach(function () {

        module('hitcounter');

        inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            elt = angular.element('<hit-counter></hit-counter>');
            $compile(elt)(scope);
            scope.$digest();
        });
    });

    it('should replace directive with nothing if hitCounterChange is never called', function () {
        expect(elt.text()).toEqual('');
    });

    it('should replace directive with nothing if hitCounterChange is never called', function () {

        //when
        scope.$broadcast('hitCounterChange', 10);
        scope.$apply();

        expect(elt.text()).toEqual('10');
    });
});
