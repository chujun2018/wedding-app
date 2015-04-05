'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$rootScope',function($scope, $rootScope) {
$rootScope.background = 'bg-img-default';
 $scope.ukPictures = [
 {url:'http://www.segeriusbruceblog.com/wp-content/uploads/London-Wedding-Photographer-0046.jpg'},
{url:'http://helenaamorphotography.com/wp-content/uploads/galleries/post-37/canary-wharf-city-of-london-wedding-photography.jpg'},
{url:'http://www.whiteavenue.co.uk/wp-content/uploads/2013/10/London-Downton-Abby-Hi-res-0244.jpg'},
{url:'http://www.energyphotographic.co.uk/wp-content/uploads/2012/02/The-Goring-Hotel-London-Wedding-Photographer044.jpg'},
{url:'http://www.douglasfry.com/slideshows/home/Wedding-Photographer-London-07.jpg'},
{url:'http://www.kathillblog.com/wp-content/uploads/2013/02/WINTERLONDONWEDDING_006.jpg'},
{url:'http://www.wedding-photographer-imag1ne.com/images/uploads/wedding-photographer-london-009.jpg'}
 ];

 $scope.change2Uk = function(){
     $rootScope.background = 'bg-img-default';
 };

$scope.change2France = function(){
    $rootScope.background = 'bg-img-france';
};

 $scope.index = 0   ;
 $scope.nextPhoto = function(data){
    if ($scope.index < (data.length-1)){
        $scope.index++;
    }else{
        $scope.index = 0;
    }
 };

  $scope.previousPhoto = function(data){
     if ($scope.index != 0){
         $scope.index--;
     }else{
         $scope.index = data.length - 1;
     }

  };
}]);