'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {

 $scope.ukPictures = [
 {
   url:'http://www.segeriusbruceblog.com/wp-content/uploads/London-Wedding-Photographer-0046.jpg'
 },
{
   url:'http://tws1.ftwmedia.netdna-cdn.com/wp-content/plugins/jobber-import-articles/photos/101825-wedding-photographer-in-london.jpg'
},
     {
        url:'http://www.lisaburrett.co.uk/wp-content/uploads/2012/04/romantic-wedding-photography-london-sunset.jpg'
     }
 ];

 $scope.index = 0;
 $scope.nextPhoto = function(data){
    if ($scope.index < data.size){
        $scope.index++;
    }else{
        $scope.index = 0;
    }

 }
}]);