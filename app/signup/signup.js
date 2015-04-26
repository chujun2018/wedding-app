'use strict';

angular.module('myApp.signup', ['ngRoute', 'ui.bootstrap.datetimepicker'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupCtrl'
  });
}])

.controller('signupCtrl', ['$scope','$rootScope',function($scope, $rootScope) {
    $rootScope.showTop = true;
}]);