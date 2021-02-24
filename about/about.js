'use strict';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: 'about/about.html',
      controller: 'aboutController'
    });
  })

  .controller('aboutController', function ($scope) {
    console.log('about controllers');
    console.log($scope?.services);
  });
