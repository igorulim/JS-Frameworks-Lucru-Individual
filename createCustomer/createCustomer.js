'use strict';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/createCustomer', {
      templateUrl: 'createCustomer/createCustomer.html',
      controller: 'createCustomerController'
    });
  })

  .controller('createCustomerController', function ($scope) {
    console.log('createCustomer controller');
  });
