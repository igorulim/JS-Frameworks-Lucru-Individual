'use strict';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/createInvoice', {
      templateUrl: 'createInvoice/createInvoice.html',
      controller: 'createInvoiceController'
    });
  })

  .controller('createInvoiceController', function ($scope) {
    console.log('createInvoice controller');
  });
