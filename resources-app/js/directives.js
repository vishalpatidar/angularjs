angular.module('artistApp', [])
    .directive('searchItem', function() {
        return {
            restrict: "E",
            templateUrl: 'partials/search-artist.html',
            controller: 'searchCtrl'
        }
    });
