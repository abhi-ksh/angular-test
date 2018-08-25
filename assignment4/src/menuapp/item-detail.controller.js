(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemDetailController', ItemDetailController);

  // Version with resolving to 1 item based on $stateParams in route config
  ItemDetailController.$inject = ['menuItemsList'];
  function ItemDetailController(menuItemsList) {
    console.log("Inside ItemDetailController");
    console.log("menuItemsList: ", menuItemsList.data);
    var itemDetail = this;
    itemDetail.menuItems = menuItemsList.data.menu_items;
    itemDetail.category = menuItemsList.data.category.name;
    console.log("category name: ", menuItemsList.data.category.name);
    // console.log("MenuItems: ", itemDetail.menuItems);
    // var item = items[$stateParams.itemId];
    // var categoryShortName = item.short_name
    // var promise = MenuDataService.getItemsForCategory(categoryShortName);
    // promise.then(function (response) {
    //   itemDetail.menuItems = response.data;
    // })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
  }

})();
