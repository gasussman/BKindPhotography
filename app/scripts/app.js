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
     '/images/album-1.jpg',
     '/images/album-2.jpg',
     '/images/album-3.jpg',
     '/images/album-4.jpg',
     '/images/album-5.jpg',
     '/images/album-6.jpg',
     '/images/album-7.jpg',
     '/images/album-8.jpg',
     '/images/album-9.jpg',
   ];

   $scope.shuffle = function(albumURLs) { //v1.0
    for(var j, x, i = $scope.albumURLs.length; i; j = Math.floor(Math.random() * i), x = $scope.albumURLs[--i], $scope.albumURLs[i] = $scope.albumURLs[j], $scope.albumURLs[j] = x);
    return $scope.albumURLs;
    };

 }]);