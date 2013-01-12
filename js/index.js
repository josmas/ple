

var PleApp = angular.module('PleApp', []);

PleApp
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'partials/home.html',   controller: MainCtrl}).
        otherwise({redirectTo: '/'});
  }]);

function MainCtrl($scope, $http) {
  $scope.title = 'Home';
  $http.get('https://p2pu.org/api/alpha/courses/?format=json').success(function(response) {
    sc.response = response;
    console.log(response);
  });
}
