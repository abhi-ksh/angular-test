(function(){
'use strict';
    angular.module('myFirstApp', [])
    .controller('myFirstController', function($scope){

        $scope.name = "";
        $scope.nameValue = 0;

        $scope.displayNameValue = function (){
             var tempNameValue = 0;
             tempNameValue = calculateNameValue($scope.name);
             $scope.nameValue = tempNameValue;


        }

        function calculateNameValue(string) {
            var calculatedNameValue = 0 
            var i = 0;
            for (i = 0; i < string.length; i++){
                calculatedNameValue += string.charCodeAt(i);
            }

            return calculatedNameValue;


        }


    })



})();
