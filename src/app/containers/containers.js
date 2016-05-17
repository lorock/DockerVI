(function () {
  'use strict';

  angular.module('dockerApp.containers',[])
    .config(function ($stateProvider) {
      $stateProvider
      .state('containerList', {
        url: '/containers/list/',
        templateUrl: 'app/containerList/containerList.html',
        controller: 'ContainerListCtrl'
      })
      .state('containerDeatil', {
        url: '/containers/:id/Detail/',
        templateUrl: 'app/containerDetail/containerDetail.html',
        controller: 'containerDetailCtrl'
      })
      .state('containerCreate', {
        url: '/containers/:repo/:username/:name/:tag/create/',
        templateUrl: 'app/containerCreate/containerCreate.html',
        controller: 'containerCreateCtrl'
    });
    });
})();
