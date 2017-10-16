angular
    .module("doomBotApp")
    .controller("userController", function ($scope, userService) {
        userService.getUsers().then(function (response) {
            $scope.users = response.data;
            console.log($scope.users);

        }, function (error) {
            console.log(error);
        })

    })