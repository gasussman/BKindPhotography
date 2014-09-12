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
     url: '/',
     templateUrl: 'app/assets/templates/aboutme.html',
     controller: 'Aboutme.controller'
   });

   $stateProvider.state('contact', {
     url: '/',
     templateUrl: 'app/assets/templates/contact.html',
     controller: 'Contact.controller'
   });

}]);

 bKind.controller('Landing.controller', ['$scope', function($scope) {}])

 bKind.controller('Portfolio.controller', ['$scope', function($scope) {

   $( '#ri-grid' ).gridrotator( {
     animType  : 'fadeInOut',
     animSpeed : 1000,
     interval  : 600,
     step    : 1,
     w320    : {
       rows  : 3,
     columns : 4
     },
     w240    : {
       rows  : 3,
     columns : 4
     }
   } );
 }]);
>>>>>>> 72d70ea9f584ce639925015715aff635fef7e176
