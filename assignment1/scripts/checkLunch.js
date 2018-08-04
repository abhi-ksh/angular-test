(function () {
    'use strict;'
    angular.module('LunchCheck', [])
        //add controller to the app
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.displayCheckMessage = function () {
            //initialize the message
            $scope.outputMessage = "";
            if ($scope.inputList == undefined) {
                $scope.inputList = "";
            }


            $scope.outputMessage = setDisplayMessage($scope.inputList);

            if ($scope.outputMessage == "Enjoy!" || $scope.outputMessage == "Too much.") {
                $scope.msgStyle = {
                    "color": "green"
                };
                $scope.inputBoxStyle = {
                    "border-color": "green"
                };
            } else {
                $scope.msgStyle = {
                    "color": "red"
                };
                $scope.inputBoxStyle = {
                    "border-color": "red"
                };
            }


        }

    }



    function setDisplayMessage(string) {
        var outputString = "";
        if (string == "") {
            outputString = "Please enter data first.";
        } else {
            var listArray = string.split(",");
            if (listArray.length <= 3) {
                outputString = "Enjoy!";
            } else {
                var strCounter = 0;
                // check for blank, empty string inputs
                for (var i = 0; i < listArray.length; i++) {
                    if (listArray[i].trim() != "") {
                        strCounter++;
                    }
                }
                // console.log("Counter : " + strCounter);
                if (strCounter <= 3) {
                    outputString = "Enjoy!";
                } else {
                    outputString = "Too much."

                }
            }

        }

        return outputString;

    }


})();
