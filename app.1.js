(function(){
'use strict';
    angular.module('myFirstApp', [])
    .controller('myFirstController', function($scope){

        $scope.name = "Abhijit";
        $scope.myFuction = function (){

            return "This nees my babbi okay!"

        }


    })



})();
