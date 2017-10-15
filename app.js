var app = angular.module("doomBotApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");


    $stateProvider
    .state("app", {
        abstract: true,
        url: '',
        templateUrl: './views/app-container.html'
    })

    .state("app.home", {
        url: '/home',
        templateUrl: './views/home.html',
        controller: "homeController"
    })

    .state("app.orderList", {
        url: "/orderList",
        templateUrl: "./views/order-list.html",
        controller: "orderListController"
    })

    .state("app.account", {
        url: "/account",
        templateUrl: "./views/account.html",
        controller: "adminController"
    })

    .state("app.checkOrder", {
        url: "/checkOrder",
        templateUrl: "./views/check-order.html",
        controller: "checkOrderController"
    })

    .state("app.login", {
        url: "/login",
        templateUrl: "./views/login.html",
        controller: "loginController"
    })
})