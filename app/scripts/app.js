bKind = angular.module('bKind', ['ui.router']);
 
bKind.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

   $stateProvider.state('landing', {
     url: '/',
     templateUrl: 'app/assets/templates/landing.html',
     controller: 'Landing.controller'
   });

}]);

 bKind.controller('Landing.controller', ['$scope', function($scope) {

  $scope.albumURLs = [
     'app/assets/images/picture_1.jpg',
     'app/assets/images/picture_2.jpg',
     'app/assets/images/picture_3.jpg',
     'app/assets/images/picture_4.jpg',
     'app/assets/images/picture_5.jpg',
     'app/assets/images/picture_6.jpg',
     'app/assets/images/picture_7.jpg',
     'app/assets/images/picture_8.jpg',
     'app/assets/images/picture_9.jpg',
     'app/assets/images/picture_10.jpg',
     'app/assets/images/picture_11.jpg',
     'app/assets/images/picture_12.jpg'
   ];

   $scope.shuffle = function(albumURLs) { //v1.0
    for(var j, x, i = $scope.albumURLs.length; i; j = Math.floor(Math.random() * i), x = $scope.albumURLs[--i], $scope.albumURLs[i] = $scope.albumURLs[j], $scope.albumURLs[j] = x);
    return $scope.albumURLs;
    };

 }]);