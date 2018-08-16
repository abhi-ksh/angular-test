(function () {
    'use strict';
    angular.module('SearchApp', [])
        .controller('SearchController', SearchController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'menuItemList.html',
            scope: {
                filteredList: '<',
                removeItem: '&',
                srchText: '<',
                foundItemsFlag: '<'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'found',
            bindToController: true
        };

        return ddo;

    };

    function FoundItemsDirectiveController() {
        var found = this;
    };


    SearchController.$inject = ['MenuSearchService'];
    function SearchController(MenuSearchService) {
        var searcher = this;
        searcher.srchText = "";
        searcher.foundItemsFlag = true;

        var promise = MenuSearchService.getMenuItemList();

        promise.then(function (response) {
            searcher.fullList = response.data.menu_items;
            // console.log(searcher.fullList);

        })
            .catch(function (error) {
                console.log(error);
            });

        searcher.filteredList = [];
        searcher.getMatchingMenuItems = function (srchText) {
            // convert the search argument to lower case as the description is in lower case
            srchText = srchText.toLowerCase();
            searcher.foundItemsFlag = false;
            // console.log("Searching for ", srchText);
            if (srchText == "") {
                searcher.filteredList = [];
                // console.log("Searching for blank string: ", srchText);

            } else {
                searcher.filteredList = [];
                for (var i = 0; i < searcher.fullList.length; i++) {
                    // console.log("Searching for :", srchText);
                    if (searcher.fullList[i].description.indexOf(srchText) != -1) {
                        searcher.filteredList.push(searcher.fullList[i]);
                        // console.log(searcher.fullList[i]);

                    }
                }
            }
            if (searcher.filteredList.length > 0) {
                searcher.foundItemsFlag = true;
            }

        };

        searcher.removeItem = function (itemIndex) {
            // console.log("Deleting item: ", searcher.filteredList[itemIndex]);
            searcher.foundItemsFlag = false;
            searcher.filteredList.splice(itemIndex, 1);
            if (searcher.filteredList.length > 0) {
                searcher.foundItemsFlag = true;
            }
        };

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMenuItemList = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
            });

            return response;
        };

    }


})();
