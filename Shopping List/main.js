var app = angular.module('shoppingList', []);

app.controller('MainController', function($scope) {
    $scope.newItem = "";
    $scope.list = [];
    
    $scope.updateList = function(newItem) {
        if (newItem !== "") {
            $scope.list.push(newItem);
            $scope.newItem = "";
        }
        
    }
        
    $scope.rmvBtn = function (item) {
        var index = $scope.list.indexOf(item);
        $scope.list.splice(index, 1);
    }
    
    localStorage.setItem('savedList', JSON.stringify($scope.list));
    
    var savedList = $scope.savedList = JSON.parse(localStorage.getItem('savedList')) || [];
    
    $scope.popSavedList = function(savedItem) {
        $scope.savedList.push(savedItem);
        localStorage.setItem(JSON.stringify('savedList', $scope.savedList));   
    }
});

$("#addText").keyup(function(event){
    if(event.keyCode == 13){
        $("#add").click();
    }
});


