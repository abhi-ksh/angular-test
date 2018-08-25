(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuDataController', MenuDataController);


MenuDataController.$inject = ['MenuDataService'];
function MenuDataController(MenuDataService) {
  var mainList = this;

  var promise = MenuDataService.getAllCategories();

  promise.then(function (response) {
    mainList.items = response.data;
      // console.log(searcher.fullList);

  })
      .catch(function (error) {
          console.log(error);
      });

  // mainList.items = items;
}

})();
