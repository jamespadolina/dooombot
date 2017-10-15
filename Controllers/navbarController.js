angular
.module("doomBotApp")
.controller("navbarController", function ($scope, userService) {
  
  $scope.currentUser = userService.getCurrentUser()
  console.log($scope.currentUser);
  $scope.logout = function() {
    userService.logout();
  }
})