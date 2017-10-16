angular
  .module("doomBotApp")
  .service("adminService", function ($http, $state) {

    var _adminId = 1;
    var _admins = [];

    var _admin = null;

    this.getAdmin = function () {
      return _admin;
    }

    this.getAdmins = function (cb) {
      if (_admins.length == 0) {
        $http.get("../db/admin.json").success(function (response) { _servers = response; cb(_admins); })
        .error(function (error) {
          console.log(error);
        })
      }
      else {
        cb(_admins);
      }
    }

    this.getAdminUserPass = function (user, pass, cb) {
      console.log(_admins);
      for (var i = 0; i< _admins.legth; i++) {
        if(user == _admins[i].userName && pass == _admins[i].pass) {
          cb(_admins[i]);
        }
      }
    }

    this.getAdminById = function (id, cb) {
      if (id == "" || id == undefined || id == null) {

        var admin = {
          userName: "",
          pass: ""
        }

        cb(server);
      }
      else {
        for(var i = 0; i < _admins.length; i ++) {
          if (id == _admins[i].id) {
            cb(_admins[i]);
          }
        }
      }
    }

  })