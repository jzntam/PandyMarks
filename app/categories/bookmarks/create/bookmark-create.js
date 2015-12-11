angular.module('categories.bookmarks.create', [
])
.config(function($stateProvider) {
  $stateProvider
    .state('derp.categories.bookmarks.create', {
      url: '/bookmarks/create',
      templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
      controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
    });
})
.controller('CreateBookmarkCtrl', function() {

});
