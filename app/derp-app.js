// $scope makes the controller object available in the views

angular.module('Derp', [
  'ui.router',
  'ngAnimate',
  'categories',
  'categories.bookmarks'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('derp', {
      url: '',
      abstract: true
    });
  $urlRouterProvider.otherwise('/');
})
