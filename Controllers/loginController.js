angular
  .module("doomBotApp")
  .controller("loginController", function ($scope, $state, userService) {

    userService.getUsers()
      .then(function (response) {
        $scope.users = response.data;
        console.log($scope.users);
      }, function (error) {
        console.log(error);
      })

    $scope.login = function () {

      if (!$scope.username || !$scope.password) {

        console.log("Username or password is empty");
      }
      else if ($scope.username == "admin" && $scope.password == "admin") {

      }

      else {

      }

    }
  })