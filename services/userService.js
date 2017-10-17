angular
  .module("doomBotApp")
  .service("userService", function ($http, $state) {

    var _users = [];

    var _currentUser = null;
    var _admin = false;

    this.getCurrentUser = function () {
      return _currentUser;
    }

    this.getAdmin = function() {
      return _admin;
    }

    this.setCurrentUser = function (user) {
      _currentUser = user;
    }

    this.setAdmin = function() {
      _admin = true;
    }

    this.getUsers = function() {
      return $http.get(`http://192.168.7.75:3000/users`);
      // return $http.get('http://192.168.120.7:3000/users');
    }

    this.createUser = function(user) {
      return $http.post(`http://192.168.7.75:3000/users`, user);
      // return $http.post('http://192.168.120.7:3000/users', user);
    }

    this.updateUser = function(user) {
      // $http.put(`http://192.168.120.7:3000/users/${user.id}`, user);
      $http.put(`http://192.168.7.75:3000/users/${user.id}`, user);
    }

    this.logout = function () {
      _currentUser = null;
      _admin = false;
      $state.transitionTo("app.login", null, {reload: true});
    }
    

  })