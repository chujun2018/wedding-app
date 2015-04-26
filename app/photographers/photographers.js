'use strict';

angular.module('myApp.photographers', ['ngRoute', 'ui.bootstrap.datetimepicker'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photographers', {
    templateUrl: 'photographers/photographers.html',
    controller: 'photographersCtrl'
  });
}])

.controller('photographersCtrl', ['$scope','$rootScope',function($scope, $rootScope) {
    $rootScope.showTop = true;

}]);