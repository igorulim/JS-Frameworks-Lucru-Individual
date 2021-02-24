'use strict';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/customers', {
      templateUrl: 'customers/customers.html',
      controller: 'customersController'
    });
  })

  .controller('customersController', function ($scope) {
    console.log('customers controller');
  });
