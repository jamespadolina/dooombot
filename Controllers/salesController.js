angular
.module("doomBotApp")
.controller("salesController", function ($scope, salesService) {

salesService.getSales()
.then(function(response) {
  $scope.sales = response.data;
  console.log($scope.sales);

}, function(error) {
  console.log(error);
})



})