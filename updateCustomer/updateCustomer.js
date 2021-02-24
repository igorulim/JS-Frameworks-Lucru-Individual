'use strict';
import { validateCustomerForm } from '../validator.js';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/updateCustomer/:id', {
      templateUrl: 'updateCustomer/updateCustomer.html',
      controller: 'updateCustomerController'
    });
  })

  .controller('updateCustomerController', function ($scope, $routeParams) {
    const customer = $scope.customers.find((c) => c.id === $routeParams.id);
    $scope.customer = customer;
    $scope.id = $routeParams.id;

    $scope.name = customer.name;
    $scope.personalAccount = customer.personalAccount;
    $scope.postalCode = customer.address.postalCode;
    $scope.street = customer.address.street;
    $scope.streetNumber = customer.address.nr;

    $scope.handleSubmit = () => {
      const {
        name,
        personalAccount,
        postalCode,
        street,
        streetNumber
      } = $scope;

      $scope.formErrors = validateCustomerForm(
        {
          name,
          personalAccount
        },
        $scope.customers,
        { customer }
      );

      if (!$scope.formErrors.hasErrors) {
        const customer = $scope.customers.find((c) => c.id === $scope.id);

        customer.name = name;
        customer.personalAccount = personalAccount;
        customer.address = {
          postalCode,
          street,
          nr: streetNumber
        };

        $scope.result = 'Consumatorul a fost modificat!';
      }
    };

    $scope.handleReset = () => {
      $scope.formErrors = { hasErrors: false };
      $scope.result = '';
    };
  });
