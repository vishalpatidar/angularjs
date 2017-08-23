"use strict";

angular.module("formValidations", ['ngFileUpload'])
    .filter("height", function() {
        return function(height) {
            height = parseInt(height) + 100;
            return height + " cm";
        };
    })
    .filter("salary", function() {
        return function(salary) {
            salary = parseInt(salary) * 1000;
            return salary;
        };
    })
    .controller("validateCtrl", ["$scope", "$http", "$timeout", "$compile", "Upload", function($scope, $http, $timeout, $compile, Upload) {

        $scope.master = {};
        $scope.user = {height: 50, salary : 50};
        $scope.user.contact = false;

        $scope.onChange = function (files) {
          if(files[0] == undefined) return;
          $scope.fileExt = files[0].name.split(".").pop();
        }

        $scope.isImage = function(ext) {
          if(ext) {
            return ext == "jpg" || ext == "jpeg"|| ext == "gif" || ext=="png"
          }
        }

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function(form) {
            if (form) {
                $scope.user = {height: 50, salary : 50};
                form.$setPristine();
                form.$setUntouched();
            }
        };

        $scope.reset();
    }]);
