var app = angular.module('uglyThings', []);

app.controller('MainController', function($scope) {

    $scope.uglers = [
        {
            title: "titleOne",
            url: "URLone",
            desc: "descOne"
        },
        {
            title: "titleTwo",
            url: "URLtwo",
            desc: "descTwo"
        },
        {
            title: "titleThree",
            url: "URLthree",
            desc: "descThree"
        },
    ];

    $scope.addImg = function () {
        var newImg = {
            title: "",
            url: "",
            desc: "",
        }
        
        $scope.uglers.push(newImg);
    }
});
