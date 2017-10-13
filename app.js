var app = angular.module("doomBotApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");


    $stateProvider.state("home", {
        url: '/',
        templateUrl: './views/home.html',
        controller: "homeController"
    })

    .state("orderList", {
        url: "/orderList",
        templateUrl: "./views/order-list.html",
        controller: "orderListController"
    })

    .state("admin", {
        url: "/admin",
        templateUrl: "./views/admin.html",
        controller: "adminController"
    })

    .state("checkOrder", {
        url: "/checkOrder",
        templateUrl: "./views/check-order.html",
        controller: "checkOrderController"
    })
})