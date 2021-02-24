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

  .service('adresa', function () {
    this.address = function (x) {
      return Object.values(x).join(' ');
    };
  })

  .filter('addressFormat', [
    'adresa',
    function (adresa) {
      return function (x) {
        return adresa.address(x);
      };
    }
  ])

  .controller('customerController', function ($scope, $routeParams, facturi) {
    $scope.customer = $scope.customers.find((c) => c.id === $routeParams.id);
    $scope.id = $routeParams.id;
    $scope.total = facturi.total($scope.customer.invoices);
  });
