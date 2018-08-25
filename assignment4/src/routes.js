(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuapp/templates/main-menuapp.template.html',
    controller: 'MenuDataController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

 
  
  .state('itemDetail', {
    url: '/item-detail/{id}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      menuItemsList: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              console.log("StateParams", $stateParams.id);
              return MenuDataService.getAllCategories()
              .then(function (items) {
                console.log("ItemClicked:", items.data[$stateParams.id].short_name);
                // console.log("Return object: ",MenuDataService.getItemsForCategory(items.data[$stateParams.id].short_name) )
                return MenuDataService.getItemsForCategory(items.data[$stateParams.id].short_name);
              });
            }]
    }
  });
 
}

})();
