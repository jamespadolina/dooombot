angular
  .module("doomBotApp")
  .controller("storeController", function ($scope, $state, userService) {

    $(".carousel-control").on("click", function(e) {
      console.log(e)
      e.preventDefault()
    })

  })