'use strict';

( function() {
    angular.module('resourceAppDirectives', [])
        .directive('ngPost', ['resourceService', function(resourceService) {
            return {
                restrict: "E",
                templateUrl: 'partials/single-post.html',
                scope: { postObj: '=', singlePost: '=', commentsObj: '='},
                link: function(scope, element, attr) {
                    element.on("click", ".read-more button", function() {

                        scope.singlePost.title = scope.postObj.title;
                        scope.singlePost.body = scope.postObj.body;

                        resourceService.getResource("comments/?postId=" + scope.postObj.id).success(function(data) {
                            scope.commentsObj.result = angular.fromJson(data);
                        });
                        scope.$apply();
                    });
                }
            }
        }]);
})();
