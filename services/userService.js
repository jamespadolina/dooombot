angular
  .module("doomBotApp")
  .service("userService", function ($http, $state) {

    var _users = [];

    var _currentUser = false;

    this.getCurrentUser = function () {
      return _currentUser;
    }

    this.setCurrentUser = function () {
      _currentUser = true;
    }

    this.getUsers = function() {
      return $http.get(`http://192.168.7.75:3000/users`);
      // return $http.get('http://192.168.120.7:3000/users');
    }

    this.updateUser = function(user) {
      $http.put(`http://192.168.120.7:3000/users/${user.id}`, user);
      // $http.put(`http://192.168.7.75:3000/users${user.id}`, user);
    }

    this.logout = function () {
      _currentUser = false;
      $state.transitionTo("app.login", null, {reload: true});
    }
    

  })