angular
.module("doomBotApp")
.service("checkOrderService", function ($http, $state) {

this.getBots = function() {
    return $http.get(`http://192.168.7.75:3000/bots`);
}

  

})