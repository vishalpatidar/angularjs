'use strict';

(function(){
    angular.module('resourceAppControllers', ['resourceAppServices'])

        .controller('homeCtrl', [ '$scope', 'resourceService', function($scope, resourceService) {
            $scope.usersList = {};
            resourceService.getResource("users").success(function(data){
                $scope.usersList = angular.fromJson(data);
            });
        }])

        .controller('userCtrl', [ '$scope', 'resourceService', '$stateParams', function($scope, resourceService, $stateParams) {
            $scope.userDetail = {};
            resourceService.getResource("users/" + $stateParams.userId).success(function(data){
                $scope.userDetail = angular.fromJson(data);
            });
        }])

        .controller('postsCtrl', [ '$scope', 'resourceService', '$stateParams', function($scope, resourceService, $stateParams) {
            $scope.postsResult = {};

            resourceService.getResource("posts?userId=" + $stateParams.userId).success(function(data){
                $scope.postsResult = angular.fromJson(data);
            });

            $scope.showModel = function(postId) {
                $scope.singlePost  = {};
                $scope.commentsResult = {};

                resourceService.getResource("comments/?postId=" + postId).success(function(data){
                    $scope.commentsResult = angular.fromJson(data);
                });

                resourceService.getResource("posts/" + postId).success(function(data){
                    $scope.singlePost = angular.fromJson(data);
                });
            };
        }])

        .controller('albumsCtrl', [ '$scope', 'resourceService', '$stateParams', function($scope, resourceService, $stateParams) {
            $scope.userId = $stateParams.userId;
            $scope.albumResult = {};

            resourceService.getResource("user/" + $scope.userId + "/albums/").success(function(data){
                $scope.albumResult = angular.fromJson(data);
            });
        }])

        .controller('photosCtrl', [ '$scope', 'resourceService', '$stateParams', function($scope, resourceService, $stateParams) {
            $scope.userId = $stateParams.userId;
            $scope.photosResult = {};

            resourceService.getResource("albums/" + $stateParams.albumId + "/photos/").success(function(data) {
                $scope.photosResult = angular.fromJson(data);
            });
        }])

        .controller('todosCtrl', [ '$scope', 'resourceService', '$stateParams', function($scope, resourceService, $stateParams) {
            $scope.todosResult = {};

            resourceService.getResource("user/" + $stateParams.userId + "/todos/").success(function(data) {
                $scope.todosResult = angular.fromJson(data);
            });
        }]);
})();
