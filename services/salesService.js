angular
.module("doomBotApp")
.service("salesService", function ($http, $state) {

this.getSales = function() {
  return $http.get(`http://192.168.7.75:3000/sales`)
}
  

})