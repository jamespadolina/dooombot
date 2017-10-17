angular
.module("doomBotApp")
.service("checkOrderService", function ($http, $state) {

this.getBots = function() {
    return $http.get(`http://192.168.120.7:3000/bots`);
    
}

  

})