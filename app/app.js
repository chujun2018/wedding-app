'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider, $rootScope, $scope) {
  $routeProvider.otherwise({redirectTo: '/home'});

}])

.controller('mainCtrl', ['$rootScope', '$scope',function($rootScope, $scope) {
    var englishLang = {
      title : 'Wedding Photography',
      home : 'Home',
      phtographer : 'Photographers',
      contact : 'Customer Service',
      search : 'Search',
      uk : 'UK',
      fr : 'France',
      it : 'Italy',
      usa : 'America',
      jp : 'Japan',
      kr : 'Korea',
      previous :'previous',
      next:'next',
      getInTouch:'Contact Photographers',
      guide:'Guide',
      needHelp:'Need Help?',
      call:'Contact',
      signUp:'Sign up',
      logIn:'Log in',
      photographerPortal:'Photographer Portal'
    };

      var chineseLang = {
      title : '海外婚纱摄影',
        home : '主页',
        phtographer : '联系摄影师',
        contact : '客户服务',
        search : '搜索',
        uk : '英国',
        fr : '法国',
        it : '意大利',
        usa : '美国',
        jp : '日本',
        kr : '韩国',
              previous :'上一张',
              next:'下一张',
              getInTouch:'联系摄影师',
                    guide:'指南',
                    needHelp:'咨询帮助',
                    call:'联系'
      };
     $rootScope.language = {};
    $rootScope.language = englishLang;
    $rootScope.switch2English = function(){
        $rootScope.language = englishLang;
    };
      $rootScope.switch2Chinese = function(){
          $rootScope.language = chineseLang;
      };

      $rootScope.mainActive = 'active';

}]);
