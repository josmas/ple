function MainCtrl($scope, $http) {
  $scope.title = 'Home';
  $http.get('https://p2pu.org/api/alpha/courses/?format=json').success(function(response) {
    $scope.p2pu = angular.fromJson(response);
    console.log($scope.p2pu)
  });
//  TODO (Jose) this call works but we are not using it for now
//  $http.get('https://www.coursera.org/maestro/api/topic/list').success(function(response) {
//    $scope.coursera = response;
//  });

  $scope.saveCourses= function(courses){
    var p2puCourses = [],
        courseToStore;
    angular.forEach($scope.p2pu.objects, function(course){
      courseToStore = { name: course.name, description: course.short_description };
      console.log(courseToStore);
      p2puCourses.push(courseToStore);
    });

    chrome.storage.sync.set({'p2pu': p2puCourses}, function() {
      var notification = webkitNotifications.createNotification(
        '../img/calculator-16.png',
        'Saved!',
        'Courses have been saved successfully' 
      );
      notification.show();
    });
  }
}
