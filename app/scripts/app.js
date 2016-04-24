'use strict';

angular
  .module('ngTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/next', {
        templateUrl: 'views/next.html',
        controller: 'NextCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
