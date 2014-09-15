bKind = angular.module('bKind', ['ui.router']);
 
bKind.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

   $stateProvider.state('landing', {
     url: '/',
     templateUrl: 'app/assets/templates/landing.html'   
   });

   $stateProvider.state('portfolio', {
     url: '/portfolio',
     templateUrl: '/app/assets/templates/portfolio.html',
     controller: 'Portfolio.controller'
   })

   $stateProvider.state('aboutme', {
     url: '/aboutme',
     templateUrl: 'app/assets/templates/aboutme.html',
   });

   $stateProvider.state('contact', {
     url: '/contact',
     templateUrl: 'app/assets/templates/contact.html'
   });

}]);

 bKind.controller('Landing.controller', ['$scope', function($scope) {}])

 bKind.controller('Portfolio.controller', ['$scope', function($scope) {

   $( '#ri-grid' ).gridrotator( {
     rows      : 3,
     columns   : 15,
     animType  : 'fadeInOut',
     animSpeed : 1000,
     interval  : 600,
     step      : 5,
     w320    : {
       rows  : 3,
     columns : 4
     },
     w240    : {
       rows  : 3,
     columns : 4
     },
     onhover : true
   } );

   $scope.imageURLs = [
     'app/assets/images/picture_1.jpg',
     '/app/assets/images/picture_2.jpg',
     '/app/assets/images/picture_3.jpg',
     '/app/assets/images/picture_4.jpg',
     '/app/assets/images/picture_5.jpg',
     '/app/assets/images/picture_6.jpg',
     '/app/assets/images/picture_7.jpg',
     '/app/assets/images/picture_8.jpg',
     '/app/assets/images/picture_9.jpg',
   ];
 }]);

 




