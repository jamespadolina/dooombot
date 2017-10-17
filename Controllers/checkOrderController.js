angular
    .module("doomBotApp")
    .controller("checkOrderController", function ($scope, $state, $stateParams, checkOrderService, userService, salesService) {

        $scope.userinfo = true;
        $scope.updateform = false;
        $scope.saleinfo = true;
        $scope.updatesale = false;
        $scope.savebtn = false;
        $scope.savesalebtn = false;
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
        
        $scope.updateUser = function() {
            $scope.userinfo = false;
            $scope.updateform = true;
            $scope.savebtn = true;
        }

        $scope.updateSale = function() {
            $scope.saleinfo = false;
            $scope.updatesale = true;
            $scope.savesalebtn = true;
        }

        $scope.saveUser = function(user) {
            userService.updateUser(user);
            $scope.userinfo = true;
            $scope.updateform = false;
            $scope.savebtn = false;
        }
        $scope.saveSale = function(sale) {
            salesService.updateSale(sale);
            $scope.saleinfo = true;
            $scope.updatesale = false;
            $scope.savesalebtn = false;
        }

        $scope.botList = function(transaction) {
            $state.go("app.single", {id: transaction.id})
        }

    })