angular
  .module("doomBotApp")
  .controller("loginController", function($scope, $state, userService) {

      userService.getUsers()
      .then(function (response) {
        $scope.users= response.data;
        console.log($scope.users);
      }, function (error) {
        console.log(error);
      })
  })