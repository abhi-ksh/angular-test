(function () {
    'use strict';
    angular.module('MyShoppingApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('MyShoppingService', MyShoppingService);

    ToBuyController.$inject = ['MyShoppingService'];
    function ToBuyController(MyShoppingService) {
        var buyList = this;
        var shoppingList = [];

        buyList.shoppingList = MyShoppingService.getShoppingList();
        // console.log("Returned from service: " + buyList.shoppingList);

        buyList.checkOffItem = function (itemIndex) {
            MyShoppingService.checkOffItem(itemIndex);

        };
    }


    AlreadyBoughtController.$inject = ['MyShoppingService'];
    function AlreadyBoughtController(MyShoppingService) {
        var boughtList = this;
        var shoppingList = [];

        boughtList.shoppingList = MyShoppingService.getBoughtList();

    }

    function MyShoppingService() {
        var service = this;
        var initialShoppingList = [
            { name: "Avocados", quantity: "2" },
            { name: "Onion", quantity: "1" },
            { name: "Tomato", quantity: "1" },
            { name: "Salt", quantity: "1" },
            { name: "Jalapenos", quantity: "2" },
            { name: "Cilantro", quantity: "1" }];
        var shoppingList = initialShoppingList;
        var boughtList = [];

        service.shoppingList = shoppingList;
        service.boughtList = boughtList;
        service.checkOffItem = function (itemIndex) {
            // console.log("Checking off item:");
            var item = shoppingList[itemIndex]
            service.shoppingList.splice(itemIndex, 1);
            service.addToBoughtList(item);
        };

        service.addToBoughtList = function (item) {
            service.boughtList.push(item);
            // console.log("Bought list:" , service.boughtList);
        };

        service.getBoughtList = function () {
            return service.boughtList;
        };

        service.getShoppingList = function () {
            // console.log("Came to get the ShoppingList");
            // console.log(service.shoppingList);
            return service.shoppingList;
        }
    }

})();