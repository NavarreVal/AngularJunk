var app = angular.module('nameBadge', []);

app.controller('MainController', function($scope) {
    $scope.newFn = "";
    $scope.newLn = "";
    $scope.newEmail = "";
    $scope.newPob = "";
    $scope.newPhone = "";
    $scope.newFood = "";
    $scope.newNotes = "";
    $scope.badges = [];
    
    $scope.updateList = function(newFn, newLn, newEmail, newPob, newPhone, newFood, newNotes) {
        if (newFn, newLn, newEmail, newPob, newPhone, newFood, newNotes !== "") {
            $scope.badges.push(newFn, newLn, newEmail, newPob, newPhone, newFood, newNotes);
            $scope.newFn = "";
            $scope.newLn = "";
            $scope.newEmail = "";
            $scope.newPob = "";
            $scope.newPhone = "";
            $scope.newFood = "";
            $scope.newNotes = "";
        }
    }
  
});
    
$("#addText").keyup(function(event){
    if(event.keyCode == 13){
        $("#add").click();
    }
});
