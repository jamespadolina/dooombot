angular
  .module("doomBotApp")
  .controller("loginController", function($scope, $state, userService) {

      userService.getUsers().then(function (response) {
        $scope.users= response.data;
      }, function (error) {
        console.log(error);
      })
  })