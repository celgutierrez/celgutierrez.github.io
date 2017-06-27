var app = angular.module('Portfolio', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlProvider',
    function($stateProvider, $urlProvider) {
        $urlProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'views/projects.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'views/404.html'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
]);
