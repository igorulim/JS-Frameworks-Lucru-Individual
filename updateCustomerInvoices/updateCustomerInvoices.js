'use strict';
import { validateInvoiceForm } from '../validator.js';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/updateCustomerInvoices/:customerId', {
      templateUrl: 'updateCustomerInvoices/updateCustomerInvoices.html',
      controller: 'updateCustomerInvoicesController'
    });
  })

  .controller(
    'updateCustomerInvoicesController',
    function ($scope, $routeParams) {
      const customer = $scope.customers.find(
        (c) => c.id === $routeParams.customerId
      );
      $scope.customer = customer;
      $scope.customerId = $routeParams.customerId;

      $scope.invoiceId = customer.invoices.length
        ? customer.invoices[0].id
        : null;

      $scope.isEmpty = $scope.invoiceId ? false : true;

      $scope.handleInvoiceChange = () => {
        const invoice = $scope.customer.invoices.find(
          (i) => i.id === $scope.invoiceId
        );

        if (invoice) {
          $scope.invoice = invoice;

          $scope.serviceId = invoice.service.id;
          $scope.payment = invoice.payment;
          $scope.issuedAt = new Date(invoice.issuedAt);
          $scope.dispatchedAt = new Date(invoice.dispatchedAt);
          $scope.dueDate = new Date(invoice.dueDate);
        }
      };

      $scope.handleInvoiceChange();

      $scope.handleSubmit = () => {
        const { payment, issuedAt, dispatchedAt, dueDate } = $scope;

        $scope.formErrors = validateInvoiceForm(
          {
            customerId: $scope.customerId,
            serviceId: $scope.serviceId,
            payment
          },
          $scope.customers,
          $scope.services
        );

        if (!$scope.formErrors.hasErrors) {
          const service = $scope.services.find(
            (s) => s.id === $scope.serviceId
          );

          $scope.invoice.service = service;
          $scope.invoice.payment = payment;
          $scope.invoice.issuedAt = issuedAt;
          $scope.invoice.dispatchedAt = dispatchedAt;
          $scope.invoice.dueDate = dueDate;

          $scope.result = 'Operația a fost realizată!';
        }
      };

      $scope.handleInvoiceDelete = (invoiceId) => {
        $scope.customer.invoices = $scope.customer.invoices.filter(
          (i) => i.id !== invoiceId
        );

        $scope.invoiceId = $scope.customer.invoices.length
          ? $scope.customer.invoices[0].id
          : null;

        if (!$scope.invoiceId) $scope.isEmpty = true;

        $scope.handleInvoiceChange();
      };
    }
  );
