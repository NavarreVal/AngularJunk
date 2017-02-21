var app = angular.module('starWars', []);

app.controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {
    $http.get("https://swapi.co/api/films/1").then(function (response) {
        $scope.sw = response.data;
    });
}]);
