'use strict';
import { customers, services } from './mock.js';

const app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: 'home',
    controller: 'homeController'
  });
});

app.controller('appController', function ($scope) {
  $scope.customers = customers;
  $scope.services = services;
});
