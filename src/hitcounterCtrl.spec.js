'use strict';

describe('hitCounterInterceptor', function () {

    var hitCounterInterceptor;

    beforeEach(function () {

        module('hitcounter');

        //mock underscore debounce
        _.debounce = function (callback) {
            return callback;
        };

        inject(function (_hitCounterInterceptor_) {
            hitCounterInterceptor = _hitCounterInterceptor_;
        });

    });

    it('should be initialize a counter with 0', function () {
        expect(hitCounterInterceptor.counter).toBe(0);
    });

    it('should increment counter on request', function () {

        //given
        spyOn(hitCounterInterceptor, 'debounceBroadcastCounter');

        //when
        hitCounterInterceptor.request('request');

        //then
        expect(hitCounterInterceptor.counter).toBe(1);
        expect(hitCounterInterceptor.debounceBroadcastCounter).toHaveBeenCalled();
    });

    it('should broadcast event when debounce broadcast is called', inject(function ($rootScope) {

        //given
        spyOn($rootScope, '$broadcast');
        hitCounterInterceptor.counter = 10;


        //when
        hitCounterInterceptor.debounceBroadcastCounter();

        //then
        expect($rootScope.$broadcast).toHaveBeenCalledWith('hitCounterChange', 10);
    }));

    describe('reset counter', function () {

        it('should reset counter on call reset', function () {

            //given
            hitCounterInterceptor.counter = 10;

            //when
            hitCounterInterceptor.reset();

            //then
            expect(hitCounterInterceptor.counter).toBe(0);
        });

        it('should call reset on route change', inject(function ($rootScope) {
            //given
            spyOn(hitCounterInterceptor, 'reset');

            //when
            $rootScope.$emit('$routeChangeSuccess');

            //then
            expect(hitCounterInterceptor.reset).toHaveBeenCalled();
        }));
    });
});