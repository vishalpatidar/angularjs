'use strict';

// Define the `phonecatControllers` module
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', 'Phone',
    function ($scope, $http, Phone) {
        $scope.phones = Phone.query();
        //$scope.phones = data.splice(0, 5);
        $scope.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', 'Phone',
    function($scope, $routeParams, $http, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
        $scope.phoneId = $routeParams.phoneId;

    }]);
