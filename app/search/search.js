'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'searchCtrl'
  });
}])

.controller('searchCtrl', ['$rootScope',function($rootScope) {

  $rootScope.showTop = true;

  $rootScope.photographers = [
  {name:'James Scott',rating:4,Location:'UK',photo:'https://cdn.tutsplus.com/photo/uploads/legacy/613_maleportraits/21.jpg'},
  {name:'William Smith',rating:2,Location:'UK',photo:'https://s-media-cache-ak0.pinimg.com/236x/71/3d/ec/713dec1e66bb11af1c98a6fdac415481.jpg'},
  {name:'Daniel King',rating:5,Location:'UK',photo:'https://s-media-cache-ak0.pinimg.com/236x/f9/44/8b/f9448b822c97d049130b5b4a5e511295.jpg'},
  {name:'Basile Pichard',rating:3,Location:'France',photo:'http://cache2.asset-cache.net/gc/157423586-male-portrait-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=L2dQDa65Cxy%2F9RlbfYfA%2BD4oS0mzn%2Ff%2B1B%2BDarck997xSIoI3QFv2J4bzxIJ5%2B3o'},
  {name:'Nathan Leloup',rating:3,Location:'France',photo:'http://sarafaithphotography.com/wp-content/uploads/2015/02/male-portrait-sepia-vintage-tone-medford-oregon-photographer-square.jpg'},
  {name:'Gauthier Féret',rating:4,Location:'France',photo:'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/6/10/1307702766430/photographer-photography--005.jpg'},
  {name:'Sergio Giorno',rating:5,Location:'Italy',photo:'https://robcartwrightphotography.files.wordpress.com/2012/06/portrait-portraiture-studio-lighting-strobe-pro-man-model-male-blue-eyes-blond-blonde-photography-photo-image-glasgow-nikon-d700-photoaday-david-bailey-bold-crop-blown-white-background.jpg'},
  {name:'Elita Mason',rating:5,Location:'Italy',photo:'http://cache1.asset-cache.net/gc/528473047-portrait-of-male-to-female-transgender-woman-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=3PPyXrmI%2BadjOV9HlaYoUcka1eiStgwuV60s8AF0hsED14%2BQt3dWp%2F%2FxRSSuKDdG'},
  {name:'Giuliano Catapano',rating:1,Location:'Italy',photo:'http://cache4.asset-cache.net/gc/162534714-portrait-of-beautiful-woman-with-glass-red-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=kjeV0UxfRSjQaDokADyUiv958YYZfeqd14CaAL1Yqf8dlN3c8fdc9ak95pW6ekev'},
  {name:'Narciso Mariano',rating:4,Location:'Spain',photo:'http://cache3.asset-cache.net/gc/rbf6_18-portrait-of-a-young-adult-male-in-a-blue-shirt-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=hqRcFKQCqmxiLR2GCYaSbS5z%2FnhwiuHFDrOL9pgZgGJ5GfM7oKAxtV1zx%2BOs4NUI'},
  {name:'Anselmo Chucho',rating:4,Location:'Spain',photo:'http://cache4.asset-cache.net/gc/108174174-portrait-of-male-paparazzi-holding-camera-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=iBtlIVE42uckVRAYWq%2FXQVubWDJnxL1zLvWvTuuhQtfeTB8ezg8py2p7SkYY1j4E'},
  {name:'Sosimo Gustavo',rating:3,Location:'Spain',photo:'http://cache4.asset-cache.net/gc/171375887-young-handsome-man-wearing-glasses-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=1xN14iNEA13tfx27URAS2C8O8dOHoHn4P9EiWsv%2BnJBWfGKyzTbN6Rpb5CNAuQS1'}
  ];

}]);