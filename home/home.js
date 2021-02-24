'use strict';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'homeController'
    });
  })

  .controller('homeController', function ($scope) {
    console.log('home controller');
  });
