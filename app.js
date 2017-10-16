var app = angular.module("doomBotApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");


    $stateProvider
    .state("app", {
        abstract: true,
        url: '',
        templateUrl: './views/app-container.html'
    })

    .state("app.about", {
        url: '/about',
        templateUrl: './views/about.html',
    })

    .state("app.sales", {
        url: "/sales",
        templateUrl: "./views/sales.html",
        controller: "salesController"
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