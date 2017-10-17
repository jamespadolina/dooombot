angular
  .module("doomBotApp")
  .controller("loginController", function ($scope, $state, userService) {

    $scope.warning = false;
    

    userService.getUsers()
      .then(function (response) {
        $scope.users = response.data;
        console.log($scope.users);
      }, function (error) {
        console.log(error);
      })

    $scope.login = function () {

      if (!$scope.username || !$scope.password) {

        $scope.warning = true;
      }
      else if ($scope.username == "admin" && $scope.password == "admin") {
      $state.transitionTo("app.sales", null, {reload: true});
      userService.setCurrentUser();
      }

      else {
        $scope.warning = true;
      }

    }
  })