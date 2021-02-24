'use strict';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/customer/:id', {
      templateUrl: 'customer/customer.html',
      controller: 'customerController'
    });
  })

  .service('facturi', function () {
    this.total = (facturi) =>
      facturi.reduce((total, f) => total + f.payment, 0);
  })

  .controller('customerController', function ($scope, $routeParams, facturi) {
    $scope.customer = $scope.customers.find((c) => c.id === $routeParams.id);
    $scope.id = $routeParams.id;
    $scope.total = facturi.total($scope.customer.invoices);
  });
