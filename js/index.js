

var PleApp = angular.module('PleApp', []);

PleApp
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'partials/home.html',   controller: MainCtrl}).
        otherwise({redirectTo: '/'});
  }]);

function MainCtrl($scope) {
  $scope.title = 'Home';
}
