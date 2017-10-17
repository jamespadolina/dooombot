angular
.module("doomBotApp")
.controller("navbarController", function ($scope, userService) {
  
  $scope.currentUser = userService.getCurrentUser()
  console.log($scope.currentUser);
  $scope.admin = userService.getAdmin();
  console.log($scope.admin);

  $scope.viewProfile = function() {
    $state.go("app.viewProfile", {id: currentUser.id})
  }

  $scope.logout = function() {
    userService.logout();
  }
})