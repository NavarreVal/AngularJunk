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
    
//$("#fn").keyup(function(event){
//    if(event.keyCode == 13){
//        $("#add").click();
//    }
//});

//ng-if will keep it from rendering 
//ng-show is a Boolean
//change the boolean with the 'submit' button.
//<h1> {{ someText }}</h1>
//<input type="text" ng-model="someText">