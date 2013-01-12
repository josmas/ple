
function MainCtrl($scope, $http) {
  $scope.title = 'Home';
  $http.get('https://p2pu.org/api/alpha/courses/?format=json').success(function(response) {
    $scope.p2pu = angular.fromJson(response);
  });
  $http.get('https://www.coursera.org/maestro/api/topic/list').success(function(response) {
    $scope.coursera = response;
  });
}

function StorageCtrl($scope) {
  $scope.saveCourses= function(courses){
    console.log(courses);
  }
}
