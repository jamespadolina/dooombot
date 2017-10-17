angular
.module("doomBotApp")
.controller("singleController", function($scope, $stateParams, userService, salesService, checkOrderService) {

    $scope.botList = [];
    $scope.saleID = $stateParams.id;

    checkOrderService.getBots()
    .then(function(response) {
        $scope.bots = response.data;
        console.log($scope.bots);
        for(var i = 0; i < $scope.bots.length; i++) {
            if($scope.bots[i].saleID == $scope.saleID) {
                $scope.botList.push($scope.bots[i])
                console.log($scope.botList);
            }
        }
    }, function(error) {
        console.log(error);
    })


})