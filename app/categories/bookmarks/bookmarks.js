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
            controller: 'BookmarksListCtrl as bookmarksListCtrl'
          }
        }
      });
  })
  .controller('BookmarksListCtrl', function($stateParams, BookmarksModel, CategoriesModel) {
    var bookmarksListCtrl = this;

    CategoriesModel.setCurrentCategory($stateParams.category);

    BookmarksModel.getBookmarks()
      .then(function(bookmarks){
        bookmarksListCtrl.bookmarks = bookmarks;
        console.log('bookmarks', bookmarks)
      });

    bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
    bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
  });
