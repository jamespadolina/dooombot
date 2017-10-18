angular
  .module("doomBotApp")
  .controller("loginController", function ($scope, $state, userService) {

    $scope.warning = false;


    userService.getUsers()
      .then(function (response) {
        $scope.users = response.data;


        $scope.login = function () {
          for (var i = 0; i < $scope.users.length; i++) {
            if (!$scope.username || !$scope.password) {

              $scope.warning = true;
            }
            else if ($scope.username == "admin" && $scope.password == "admin") {
              userService.setAdmin();
              $state.transitionTo("app.sales", null, { reload: true });
            }

            else if ($scope.username == $scope.users[i].username && $scope.password == $scope.users[i].password) {
              userService.setCurrentUser($scope.users[i]);
              $state.transitionTo("app.viewProfile",{id: $scope.users[i].id},{ reload:true });
            }

            else {
              $scope.warning = true;
            }
          }
        }


        console.log($scope.users);
      }, function (error) {
        console.log(error);
      })


  })