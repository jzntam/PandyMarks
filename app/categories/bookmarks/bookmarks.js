angular.module('categories.bookmarks', [
  'categories.bookmarks.create',
  'categories.bookmarks.edit',
  'derp.models.categories',
  'derp.models.bookmarks'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('derp.categories.bookmarks', {
        url: 'categories/:category',
        views: {
          'bookmarks@': {
            templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
            controller: 'BookmarksCtrl'
          }
        }
      });
  })
  .controller('BookmarksCtrl', function($scope,$stateParams) {
    $scope.currentCategoryName = $stateParams.category;
  });
