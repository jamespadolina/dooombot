angular
.module("doomBotApp")
.controller("salesController", function ($scope, $state,salesService, userService, checkOrderService) {

salesService.getSales()
.then(function(response) {
  $scope.sales = response.data;
  console.log($scope.sales);

}, function(error) {
  console.log(error);
})

userService.getUsers()
.then(function(response) {
  $scope.users = response.data;
  console.log($scope.users);
}, function(error) {
  console.log(error);
})

checkOrderService.getBots()
.then(function(response) {
  $scope.bots = response.data;
}, function(error) {
  console.log(error);
})

$scope.goToUser = function(userID) {
  $state.go("app.showCustomer", {id: userID})
}

// highchart
Highcharts.chart('container', {
  title: {
    text: 'October Sales'
  },

  xAxis: {
    categories: ['wk 1', 'wk 2', 'wk 3', 'wk 4'
    ]
  },

  series: [{
    data: [1, 3 ,2, 4]
  }]
});
           

})