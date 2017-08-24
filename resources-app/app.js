'use strict';

    // Declare app level module which depends on views, and components
    angular.module('resourceApp', [
        'ui.router',
        'resourceAppControllers',
        'resourceAppDirectives'
    ])
      .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/partials/home.html',
                controller: 'homeCtrl'
            })

            .state('posts', {
                url: '/user/:userId/posts/',
                templateUrl: '/partials/posts.html',
                controller: 'postsCtrl'
            })

            .state('todos', {
                url: '/user/:userId/todos/',
                templateUrl: '/partials/todos.html',
                controller: 'todosCtrl'
            })

            .state('photos', {
                url: '/user/:userId/albums/:albumId/photos',
                templateUrl: '/partials/photos.html',
                controller: 'photosCtrl'
            })

            .state('users', {
                url: '/users/:userId',
                templateUrl: '/partials/users.html',
                controller: 'userCtrl'
            })

            .state('albums', {
                url: '/users/:userId/albums',
                templateUrl: '/partials/albums.html',
                controller: 'albumsCtrl'
            });

            $urlRouterProvider.otherwise( '/');

            $locationProvider.html5Mode(true);
    }]);
