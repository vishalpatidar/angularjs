'use strict';

(function(){
    angular.module('artistAppControllers', [])

        .controller('homeCtrl', [ '$scope', '$http', function($scope, $http) {
            $scope.usersList = {};
            $scope.getUsers = function() {

                $http.get('https://jsonplaceholder.typicode.com/users').success(
                    function(data) {
                        $scope.usersList = angular.fromJson(data);
                    });
            };
            $scope.getUsers();

        }])

        .controller('userCtrl', [ '$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
            $scope.userDetail = {};
            $scope.getUserDetails = function() {
                $http.get('https://jsonplaceholder.typicode.com/users/' + $stateParams.userId).success(
                    function(data) {
                        $scope.userDetail = angular.fromJson(data);
                    });
            };
            $scope.getUserDetails();

        }])

        .controller('postsCtrl', [ '$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
            $scope.postsResult = {};

            $scope.getPosts = function() {

                $http.get('https://jsonplaceholder.typicode.com/posts?userId=' + $stateParams.userId).success(
                    function(data) {
                        $scope.postsResult = angular.fromJson(data);
                    });
            };
            $scope.getPosts();

            $scope.showModel = function(postId) {
                $scope.singlePost  = {};
                $scope.commentsResult = {};

                $http.get('https://jsonplaceholder.typicode.com/comments/?postId=' + postId).success(
                    function(data) {
                        $scope.commentsResult = angular.fromJson(data);
                    });

                $http.get('https://jsonplaceholder.typicode.com/posts/' + postId).success(
                    function(data) {
                        $scope.singlePost = angular.fromJson(data);
                    });
            };

        }])

        .controller('albumsCtrl', [ '$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
            $scope.userId = $stateParams.userId;
            $scope.albumResult = {};
            $scope.getAlbums = function() {

                $http.get('https://jsonplaceholder.typicode.com/user/' + $scope.userId + '/albums/').success(
                    function(data) {
                        $scope.albumResult = angular.fromJson(data);
                    });
            };
            $scope.getAlbums();
        }])

        .controller('photosCtrl', [ '$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
            $scope.userId = $stateParams.userId;
            $scope.photosResult = {};
            $scope.getPhotos = function() {

                $http.get('https://jsonplaceholder.typicode.com/albums/' + $stateParams.albumId + '/photos/').success(
                    function(data) {
                        $scope.photosResult = angular.fromJson(data);
                    });
            };
            $scope.getPhotos();
        }])

        .controller('todosCtrl', [ '$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
            $scope.todosResult = {};
            $scope.getTodos = function() {

                $http.get('https://jsonplaceholder.typicode.com/user/' + $stateParams.userId + '/todos/').success(
                    function(data) {
                        $scope.todosResult = angular.fromJson(data);
                    });
            };
            $scope.getTodos();
        }]);

})();
