'use strict';

(function() {
    angular.module('resourceAppControllers', ['resourceAppServices'])

        .controller('homeCtrl', [ '$scope', 'resourceService', function($scope, resourceService) {
            $scope.usersList = {};
            resourceService.getResource("users").success(function(data) {
                $scope.usersList = angular.fromJson(data);
            });
        }])

        .controller('userCtrl', [ '$scope', 'resourceService', '$stateParams', function($scope, resourceService, $stateParams) {
            $scope.userDetail = {};
            resourceService.getResource("users/" + $stateParams.userId).success(function(data) {
                $scope.userDetail = angular.fromJson(data);
            });
        }])

        .controller('postsCtrl', [ '$scope', 'resourceService', '$stateParams', function($scope, resourceService, $stateParams) {
            $scope.postsResult = {};
            $scope.singlePost = {};
            $scope.commentsObj = {};

            resourceService.getResource("posts?userId=" + $stateParams.userId).success(function(data) {
                $scope.postsResult = angular.fromJson(data);
            });

        }])

        .controller('albumsCtrl', [ '$scope', 'resourceService', '$stateParams', function($scope, resourceService, $stateParams) {
            $scope.userId = $stateParams.userId;
            $scope.albumResult = {};

            resourceService.getResource("user/" + $scope.userId + "/albums/").success(function(data) {
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
            $scope.newField    = {};
            $scope.editing     = false;

            resourceService.getResource("user/" + $stateParams.userId + "/todos/").success(function(data) {
                $scope.todosResult = angular.fromJson(data);
            });

            $scope.editTodo = function(todo) {
                $scope.editing = $scope.todosResult.indexOf(todo);
                $scope.newField = angular.copy(todo);
            };

            $scope.saveTodo = function(todo) {
                if ($scope.editing !== false && $scope.todosResult.indexOf(todo) == $scope.editing) {
                    $scope.todosResult[$scope.editing] = $scope.newField;
                    resourceService.updateResource("todos/"+todo.id,$scope.todosResult[$scope.editing]).success(function(data) {
                        $scope.todoUpdateResult = angular.fromJson(data);
                        console.log($scope.todoUpdateResult);
                    });

                    $scope.editing = false;
                }
            };

            $scope.cancel = function(todo) {
                if ($scope.editing !== false && $scope.todosResult.indexOf(todo) == $scope.editing) {
                    $scope.todosResult[$scope.editing] = $scope.newField;
                    $scope.editing = false;
                }
            };
        }]);
})();
