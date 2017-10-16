angular
    .module("doomBotApp")
    .controller("checkOrderController", function ($scope, $stateParams, checkOrderService, userService, salesService) {

        $scope.userID = $stateParams.id;
        console.log($scope.userID);

        $scope.transactions = [];

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

        salesService.getSales()
            .then(function(response) {
                $scope.sales = response.data;
                console.log($scope.sales);
                for(var i = 0; i < $scope.sales.length; i++) {
                    if($scope.sales[i].userID == $scope.userID) {
                        $scope.transactions.push($scope.sales[i]);
                    }
                }
                console.log($scope.transactions);
            }, function(error) {
                console.log(error);
            })

        

    })