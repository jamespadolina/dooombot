angular
.module("doomBotApp")
.controller("profileController", function($scope, $state, $stateParams, userService) {

    
    userService.getUsers()
    .then(function(response) {
        $scope.users = response.data;
    }, function(error) {
        console.log(error);
    })

    $scope.currentUser = userService.getCurrentUser();

})