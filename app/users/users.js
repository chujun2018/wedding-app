'use strict';

angular.module('myApp.users', ['ngRoute', 'ui.bootstrap.datetimepicker'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'usersCtrl'
  });
}])

.controller('usersCtrl', ['$scope','$rootScope',function($scope, $rootScope) {
    $rootScope.showTop = true;
}]);