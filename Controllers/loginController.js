angular
  .module("doomBotApp")
  .controller("loginController", function ($scope, $state, userService, adminService) {

    userService.getUsers()
      .then(function (response) {
        $scope.users = response.data;
        console.log($scope.users);
      }, function (error) {
        console.log(error);
      })

    $scope.login = function () {
      adminService.getAdminUserPass($scope.userName, $scope.pass, function (admin) {
      $scope.admin = admin;
        console.log($scope.admin)
      })

      if ($scope.admin != undefined) {
        $state.transitionTo("app.sales", {id: $scope.admin.id}, {reload: true});
        userService.setCurrentUser($scope.admin);
      } else {
        alert("Username or Password is incorrect! Please try again!")
      }

    }
  })