angular
.module("doomBotApp")
.service("salesService", function ($http, $state) {

this.getSales = function() {
  return $http.get(`http://192.168.7.75:3000/sales`)
  // return $http.get('http://192.168.120.7:3000/sales')
}

this.updateSale = function(sale) {
  $http.put(`http://192.168.7.75:3000/sales/${sale.id}`, sale);
  // $http.put(`http://192.168.120.7:3000/sales/${sale.id}`, sale);
}

})