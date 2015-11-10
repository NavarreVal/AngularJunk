var app = angular.module("FavState", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/home.html",
        controller: "HomeController"
    }).when("/about", {
        templateUrl: "pages/about.html",
        controller: "AboutController"
    }).when("/love", {
        templateUrl: "pages/love.html",
        controller: "LoveController"
    })
    .otherwise({ redirectTo: "/" })
});

app.controller("HomeController", ["$scope", function ($scope) {
}]);

app.controller("AboutController", ["$scope", function ($scope) {
}]);

app.controller("LoveController", ["$scope", function ($scope) {
}]);