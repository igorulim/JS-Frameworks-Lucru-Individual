'use strict';
import { getCustomerId } from '../mock.js';
import { validateCustomerForm } from '../validator.js';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/createCustomer', {
      templateUrl: 'createCustomer/createCustomer.html',
      controller: 'createCustomerController'
    });
  })

  .controller('createCustomerController', function ($scope) {
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
        $scope.customers
      );

      if (!$scope.formErrors.hasErrors) {
        $scope.customers.push({
          id: getCustomerId(),
          name,
          personalAccount,
          address: {
            postalCode,
            street,
            nr: streetNumber
          },

          invoices: []
        });

        $scope.result = 'Consumatorul a fost adăugat!';
      }
    };

    $scope.handleReset = () => {
      $scope.formErrors = { hasErrors: false };
      $scope.result = '';
    };
  });
