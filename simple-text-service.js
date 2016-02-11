(function(angular) {
    'use strict';

    var module = angular.module('simple-text-service', []);

    module.provider('TextService', function () {

        var self = this;
        self.textBase = {};

        var getText = function (key) {
            var value = self.textBase[key];
            return value ? value : '';
        };

        this.$get = function () {
            return {
                getText: getText
            };
        };
    });

    module.filter('textService', ['TextService', function (TextService) {
        return function (key) {
            return TextService.getText(key);
        };
    }]);

})(window.angular);