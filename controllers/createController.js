angular
.module("doomBotApp")
.controller("createController", function($scope, $state, userService) {

    
    $scope.submitbtn = true;
    $scope.updatebtn = false;
    $scope.savebtn = false;

    $scope.currentUser = userService.getCurrentUser();

    $scope.createUser = function(user) {
        userService.createUser(user);
        $state.go("app.login", {reload: true});
    }

    $scope.updateUser = function(user) {
        userService.updateUser(user);
        $state.go("app.viewProfile", {id: $scope.currentUser.id})
    }

    if($scope.currentUser == null) {
        $scope.heading = "Create an Account";
    }
    else if($scope.currentUser !=null) {
        $scope.submitbtn = false;
        $scope.heading = "Update Your Account";
        $scope.user = $scope.currentUser;
        $scope.savebtn = true;
    }
    

})