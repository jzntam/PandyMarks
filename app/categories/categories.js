angular.module('categories', [
  'derp.models.categories'
])
  .config(function($stateProvider){
    $stateProvider
      .state('derp.categories', {
        url: '/',
        views: {
          'categories@': {
            controller: 'CategoriesListCtrl as categoriesListCtrl',
            templateUrl: 'app/categories/categories.tmpl.html'
          },
          'bookmarks@': {
            controller: 'BookmarksListCtrl as bookmarksListCtrl',
            templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
          }
        }
      })
  })
  .controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel){
    var categoriesListCtrl = this;
    CategoriesModel.getCategories()
      .then(function(result){
        categoriesListCtrl.categories = result
        console.log('categories', result)
      });
  })


// the @ symbol in the views makes it an absolute path
// it will target this named view specifically with any unnamed state
