var app = angular.module('refresher', []);

app.controller('MainController', function($scope) {
    
    $scope.math = {
        numberOne: 0,
        numberTwo: 0,
        total: 0,
    }
    
    $scope.addTogether = function () {
        $scope.math.total = (parseInt($scope.numberOne)) + (parseInt($scope.numberTwo));
    }
});
    
app.controller('SecondController', function($scope) {
    
    $scope.math = {
        numberOne: 0,
        numberTwo: 0,
        total: 0,
    }
    
    $scope.multTogether = function () {
        $scope.math.total = (parseInt($scope.numberOne)) * (parseInt($scope.numberTwo));
    }
});
    
    
    