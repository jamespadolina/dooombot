angular
    .module("doomBotApp")
    .controller("checkOrderController", function ($scope, checkOrderService, userService) {

        checkOrderService.getBots().then(function (response) {
            $scope.bots = response.data;
            console.log($scope.bots);

        }, function (error) {
            console.log(error);
        })

        userService.getUsers()
            .then(function (response) {
                $scope.users = response.data;
                console.log($scope.users);
            }, function (error) {
                console.log(error);
            })

    })