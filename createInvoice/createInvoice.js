'use strict';
import { getInvoiceId } from '../mock.js';
import { validateInvoiceForm } from '../validator.js';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/createInvoice', {
      templateUrl: 'createInvoice/createInvoice.html',
      controller: 'createInvoiceController'
    });
  })

  .controller('createInvoiceController', function ($scope) {
    $scope.handleSubmit = () => {
      const {
        customerId,
        serviceId,
        payment,
        issuedAt,
        dispatchedAt,
        dueDate
      } = $scope;

      $scope.formErrors = validateInvoiceForm(
        {
          customerId,
          serviceId,
          payment
        },
        $scope.customers,
        $scope.services
      );

      if (!$scope.formErrors.hasErrors) {
        const customer = $scope.customers.find((c) => c.id === customerId);
        const service = $scope.services.find((c) => c.id === serviceId);

        customer.invoices.push({
          id: getInvoiceId(),
          payment,
          service,
          issuedAt,
          dispatchedAt,
          dueDate
        });

        $scope.result = 'Factura a fost adăugată!';
      }
    };

    $scope.handleReset = () => {
      $scope.formErrors = { hasErrors: false };
      $scope.result = '';
    };
  });
