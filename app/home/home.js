'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope','$rootScope',function($scope, $rootScope) {
$rootScope.background = 'bg-img-default';
      $scope.ukPictures = [
      {url:'http://www.energyphotographic.co.uk/wp-content/uploads/2012/02/The-Goring-Hotel-London-Wedding-Photographer044.jpg'},
      {url:'http://kristianlevenphotography.co.uk/wp-content/uploads/2013/02/london-wedding-photographer-kl-port-21.jpg'},
           {url:'http://www.douglasfry.com/slideshows/home/Wedding-Photographer-London-07.jpg'},
      {url:'http://www.segeriusbruceblog.com/wp-content/uploads/London-Wedding-Photographer-0046.jpg'},
     {url:'http://helenaamorphotography.com/wp-content/uploads/galleries/post-37/canary-wharf-city-of-london-wedding-photography.jpg'},
     {url:'http://www.whiteavenue.co.uk/wp-content/uploads/2013/10/London-Downton-Abby-Hi-res-0244.jpg'}



      ];



 $scope.change2Uk = function(){
     $rootScope.background = 'bg-img-default';
      $scope.ukPictures = [
      {url:'http://www.energyphotographic.co.uk/wp-content/uploads/2012/02/The-Goring-Hotel-London-Wedding-Photographer044.jpg'},
      {url:'http://kristianlevenphotography.co.uk/wp-content/uploads/2013/02/london-wedding-photographer-kl-port-21.jpg'},
           {url:'http://www.douglasfry.com/slideshows/home/Wedding-Photographer-London-07.jpg'},
      {url:'http://www.segeriusbruceblog.com/wp-content/uploads/London-Wedding-Photographer-0046.jpg'},
     {url:'http://helenaamorphotography.com/wp-content/uploads/galleries/post-37/canary-wharf-city-of-london-wedding-photography.jpg'},
     {url:'http://www.whiteavenue.co.uk/wp-content/uploads/2013/10/London-Downton-Abby-Hi-res-0244.jpg'}



      ];

 };

$scope.change2France = function(){
    $rootScope.background = 'bg-img-france';
     $scope.ukPictures = [
     {url:'http://www.ispwp.com/wp-content/gallery/france-photobacher/paris-wedding-photographer-photobacher-g02.jpg'},
         {url:'http://www.ispwp.com/wp-content/gallery/france-fredbayle/paris-wedding-photographer-fredbayle-g02.jpg'},
     {url:'http://www.weddings.olivierlalin.com/wp-content/uploads//2012/01/pre-wedding-portrait-paris-294.jpg'},

    {url:'http://www.christopheweddingphoto.com/wp-content/uploads/2012/04/prewedding-photographer-paris-0012.jpg'},
    {url:'http://www.weddings.olivierlalin.com/wp-content/uploads//2012/01/pre-wedding-portrait-paris-116.jpg'},

    {url:'http://www.myweddingemotion.com/wp-content/uploads/2012/03/pre-wedding-paris-5465-copie.jpg'}
     ];
};

$scope.change2Italy = function(){
    $rootScope.background = 'bg-img-it';
     $scope.ukPictures = [
     {url:'http://www.londonpreweddingphotographer.co.uk/blog/wp-content/uploads/2012/06/asian-pre-wedding-photos-venice-italy-europe-alps-03(pp_w890_h592).jpg'},
    {url:'http://www.chrispluslynnblog.com/wp-content/uploads/2013/10/Italy-destination-wedding-001.jpg'},
    {url:'http://www.babbphoto.com/wp-content/uploads/2013/09/destination-wedding-photographer-italy-wedding-photography-25.jpg'},
    {url:'http://www.maisonpestea.com/blog/wp-content/uploads/2013/07/MG_99801.jpg'},
    {url:'http://www.haydenphoenix.com/wp-content/uploads/2012/07/I9.jpg'},
    {url:'http://myinspiredwedding.com/wp-content/blogs.dir/15/files/2013/06/Cheap-Italy-Destination-Wedding-Photo-Credit-to-Kenny-Kim-Photography.jpg'}
     ];
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