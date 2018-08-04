(function () {
    'use strict;'
    angular.module('lunch-checker-app', [])
        //add controller to the app
        .controller('lunchCheckFun', function ($scope) {
            //initialize the message
            $scope.displayCheckMessage = function () {
                $scope.outputMessage = "";
                if ($scope.inputList == undefined) {
                    $scope.inputList = "";
                }
                $scope.outputMessage = setDisplayMessage($scope.inputList);

            }

        })

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
