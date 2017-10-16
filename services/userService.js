angular
  .module("doomBotApp")
  .service("userService", function ($http, $state) {

    var _users = [];

    var _currentUser = null;

    this.getCurrentUser = function () {
      return _currentUser;
    }

    this.setCurrentUser = function (user) {
      _currentUser = user;
    }

    this.getUsers = function() {
      return $http.get(`http://192.168.7.75:3000/users`);
    }



  })