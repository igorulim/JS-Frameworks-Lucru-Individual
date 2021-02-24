'use strict';

angular
  .module('app')

  .config(function ($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: 'about/about.html',
      controller: 'aboutController'
    });
  })

  .directive('about', function () {
    return {
      template: `<p>
        Această aplicație permite, utilizarea, modificarea unor date demo cu tema
        <strong><i>Achitări servicii comunale</i></strong>
      </p>`
    };
  })

  .controller('aboutController', function ($scope) {
    console.log('about controllers');
  });
