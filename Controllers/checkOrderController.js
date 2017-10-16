angular
.module("doomBotApp")
.controller("checkOrderController", function ($scope, checkOrderService) {

    checkOrderService.getBots().then(function(response) {
        $scope.bots = response.data;
        console.log($scope.bots);
    }, function(error) {
        console.log(error);
    })
  
})