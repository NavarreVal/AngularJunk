var app = angular.module('ngModel', []);


app.controller('MainController', function ($scope) {

    $scope.children = {
        one: "",
        two: "",
        three: "",
    }

    //Name Updater//
    $scope.name = "bob";

    $scope.updateName = function (newName) {
        $scope.name = newName;
    }

    //People Array//
    $scope.people = [
        {
            name: "Bob",
            age: 30,
            kids: [
                {
                    name: "Bobby Jr.",
                    age: 3,
                    favToy: "Blanket"
                },
                {
                    name: "Bo-jangles",
                    age: 1,
                    favToy: "thumb"
                },
            ]
        },
        {
            name: "Charles",
            age: 27
        },
        {
            name: "Sariah",
            age: 26
        }
    ]

});