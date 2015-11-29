angular.module('categories', [
  'derp.models.categories'
])
  .config(function($stateProvider){
    $stateProvider
      .state('derp.categories', {
        url: '/',
        views: {
          'categories@': {
            controller: 'CategoriesCtrl',
            templateUrl: 'app/categories/categories.tmpl.html'
          },
          'bookmarks@': {
            controller: 'BookmarksCtrl',
            templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
          }
        }
      })
  })
  .controller('CategoriesCtrl', function CategoriesCtrl($scope){

  })
  .controller('BookmarksCtrl', function BookmarksCtrl($scope){

  });

// the @ symbol in the views makes it an absolute path
// it will target this named view specifically with any unnamed state
