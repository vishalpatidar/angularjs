'use strict';

(function(){
    angular.module('resourceAppServices', [])
        .service('resourceService', [ '$http', function($http) {
            this.getResource = function(param) {
                return $http.get('https://jsonplaceholder.typicode.com/' + param);
            };
        }]);
})();
