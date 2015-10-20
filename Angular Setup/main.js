var app = angular.module('ngModel', []); 


app.controller('MainController', function ($scope) {

    $scope.children = "Marek";

    //Name Updater//
    
    $scope.updateName = function (newName) {
        $scope.name = newName;
    }

});