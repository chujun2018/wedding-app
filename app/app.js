'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider, $rootScope, $scope) {
  $routeProvider.otherwise({redirectTo: '/view1'});

}])

.controller('mainCtrl', ['$rootScope', '$scope',function($rootScope, $scope) {
    var englishLang = {
      title : 'Wedding Photography',
      home : 'Home',
      phtographer : 'Gallary',
      contact : 'Contact',
      search : 'Search',
      uk : 'UK',
      fr : 'France',
      sw : 'Sweden',
      usa : 'America',
      jp : 'Japan',
      kr : 'Korea',
      previous :'previous',
      next:'next'
    };

      var chineseLang = {
      title : '海外婚纱摄影',
        home : '主页',
        phtographer : '婚纱摄影',
        contact : '联系方式',
        search : '搜索',
        uk : '英国',
        fr : '法国',
        sw : '瑞典',
        usa : '美国',
        jp : '日本',
        kr : '韩国',
              previous :'上一张',
              next:'下一张'
      };
     $rootScope.language = {};
    $rootScope.language = chineseLang;
    $rootScope.switch2English = function(){
        $rootScope.language = englishLang;
    };
      $rootScope.switch2Chinese = function(){
          $rootScope.language = chineseLang;
      };
}]);
