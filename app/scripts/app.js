bKind = angular.module('bKind', ['ui.router']);
 
 bKind.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

   $stateProvider.state('landing', {
     url: '/',
     templateUrl: 'templates/landing.html',
     controller: 'Landing.controller'
   });

   }]);

 bKind.controller('Landing.controller', ['$scope', function($scope) {

  $scope.albumURLs = [
     '/images/picture_1.jpg',
     '/images/picture_2.jpg',
     '/images/picture_3.jpg',
     '/images/picture_4.jpg',
     '/images/picture_5.jpg',
     '/images/picture_6.jpg',
     '/images/picture_7.jpg',
     '/images/picture_8.jpg',
     '/images/picture_9.jpg',
     '/images/picture_10.jpg',
     '/images/picture_11.jpg',
   ];

   $scope.shuffle = function(albumURLs) { //v1.0
    for(var j, x, i = $scope.albumURLs.length; i; j = Math.floor(Math.random() * i), x = $scope.albumURLs[--i], $scope.albumURLs[i] = $scope.albumURLs[j], $scope.albumURLs[j] = x);
    return $scope.albumURLs;
    };

 }]);