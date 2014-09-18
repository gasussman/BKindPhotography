require('./modernizr.custom.26633');
require('./jquery.gridrotator');

bKind = angular.module('bKind', ['ui.router', 'ui.bootstrap', 'ui.config']);
 
bKind.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

   $stateProvider.state('landing', {
     url: '/',
     templateUrl: '/templates/landing.html'   
   });

   $stateProvider.state('portfolio', {
     url: '/portfolio',
     templateUrl: '/templates/portfolio.html',
     controller: 'Portfolio.controller'
   })

   $stateProvider.state('aboutme', {
     url: '/aboutme',
     templateUrl: '/templates/aboutme.html',
     controller: 'Aboutme.controller'
   });

   $stateProvider.state('contact', {
     url: '/contact',
     templateUrl: '/templates/contact.html'
   });

}]);

 bKind.controller('Landing.controller', ['$scope', function($scope) {}])

 bKind.controller('Portfolio.controller', ['$scope', function($scope) {

   $( '#ri-grid' ).gridrotator( {
     rows      : 2,
     columns   : 15,
     animType  : 'fadeInOut',
     animSpeed : 1000,
     interval  : 600,
     step      : 5,
     w320    : {
       rows  : 2,
     columns : 5
     },
     w240    : {
       rows  : 2,
     columns : 5
     },
     onhover : true
   } );

   $scope.myInterval = 5000;
    var slides = $scope.slides;

   $scope.slides = [
     '../images/basil_1.jpg',
     '../images/picture_1.jpg',
     '../images/picture_2.jpg',
     '../images/basil_2.jpg',
     '../images/picture_3.jpg',
     '../images/picture_4.jpg',
     '../images/basil_3.jpg',
     '../images/picture_5.jpg',
     '../images/picture_6.jpg',
     '../images/basil_4.jpg',
     '../images/picture_7.jpg',
     '../images/picture_8.jpg',
     '../images/basil_5.jpg',
     '../images/picture_9.jpg',
     '../images/picture_10.jpg',
     '../images/basil_6.jpg',
     '../images/picture_11.jpg',
     '../images/picture_12.jpg',
     '../images/basil_7.jpg',
     '../images/picture_13.jpg',
     '../images/picture_14.jpg',
     '../images/basil_8.jpg',
     '../images/picture_15.jpg',
     '../images/picture_16.jpg',
     '../images/basil_9.jpg',
     '../images/picture_17.jpg',
     '../images/basil_10.jpg',
     '../images/picture_18.jpg',
     '../images/basil_11.jpg',
     '../images/picture_19.jpg',
     '../images/picture_20.jpg',
     '../images/basil_12.jpg',
     '../images/picture_21.jpg',
     '../images/picture_22.jpg',
     '../images/basil_14.jpg',
     '../images/picture_23.jpg',
     '../images/basil_13.jpg',
     '../images/picture_24.jpg',
     '../images/basil_15.jpg',
     '../images/picture_25.jpg',
     '../images/basil_16.jpg',
     '../images/picture_26.jpg',
     '../images/basil_17.jpg',
     '../images/basil_18.jpg'
   ];
 }]);

bKind.controller('Aboutme.controller', ['$scope', function($scope) {

$scope.presidentPic = false;

$scope.nateyPic = false;

$scope.housePic = false;

$scope.basilPic = false;

$scope.chickenPic = false;

$scope.nostalgiaPic = false;

}]);

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});





