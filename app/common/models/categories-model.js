angular.module('derp.models.categories', [

])
  .service('CategoriesModel',function($http, $q){
    var model = this,
    URLS = { FETCH: 'data/categories.json' },
    categories;

    function extract(result) {
      return result.data;
    }

    function cacheCategories(result) {
      categories = extract(result);
      return categories;
    }

    model.getCategories = function(){
      return categories ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
    }

  })
;
