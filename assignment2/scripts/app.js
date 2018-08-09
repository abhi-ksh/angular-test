(function () {
    'use strict';
    angular.module('MyShoppingApp', [])
        .controller('MyShoppingController1', MyShoppingController1)
        .controller('MyShoppingController2', MyShoppingController2)
        .service('MyShoppingService', MyShoppingService);

    MyShoppingController1.$inject = ['MyShoppingService'];
    function MyShoppingController1(MyShoppingService) {
        var buyList = this;
        var shoppingList = [];

        buyList.shoppingList = MyShoppingService.getShoppingList();
        // console.log("Returned from service: " + buyList.shoppingList);

        buyList.checkOffItem = function (itemIndex) {
            MyShoppingService.checkOffItem(itemIndex);
        };
    }


    MyShoppingController2.$inject = ['MyShoppingService'];
    function MyShoppingController2(MyShoppingService) {
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