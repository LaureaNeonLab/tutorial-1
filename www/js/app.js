// Tutorial-1 of Laurea Implementing mobile apps.

var myApp = angular.module('start', ['ionic'])

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
    
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
// ABOVE THIS LINE CHANGE NOTHING

myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('pOne', {
  url: "/p1",
  templateUrl: "pages/pone.html",
})

    .state('pTwo', {
  url: "/p2",
  templateUrl: "pages/ptwo.html",
})

    .state('pThree', {
  url: "/p3",
  templateUrl: "pages/pthree.html",
})

    .state('pFour', {
  url: "/p4",
  templateUrl: "pages/pfour.html",
})

    .state('pFive', {
  url: "/p5",
  templateUrl: "pages/pfive.html",
})

   state('home', {
      url: "/home",
      abstract: true,
      templateUrl: "home.html",
    });

  /* 
    The line below is a catch all that returns you to the '/home' state if we dont find any others.
    We only have one state so thats not relevant yet.
  */ 
  $urlRouterProvider.otherwise('/home');
});


