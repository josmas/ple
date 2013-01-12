function MainCtrl($scope, $http) {
  $scope.p2pu = [];
  if (navigator.onLine) { //Grab from the network if online
    $http.get('https://p2pu.org/api/alpha/courses/?format=json').success(function(response) {
      $scope.p2pu = angular.fromJson(response.objects);
      console.log($scope.p2pu)
    });
  }
  else {
    //App is offline; look for info locally
    chrome.storage.local.get('p2pu', function(p2puLocal) {
      $scope.p2pu = angular.fromJson(p2puLocal.p2pu);
      console.log('p2pu from local is: ', $scope.p2pu);
      //telling Angular that a change in the model has happened from an async
      //call
      $scope.$apply(function($scope) {}); 
    });
  }

//  TODO (Jose) this call works but we are not using it for now
//  $http.get('https://www.coursera.org/maestro/api/topic/list').success(function(response) {
//    $scope.coursera = response;
//  });

  $scope.saveCourses= function(courses){
    var p2puCourses = [],
        courseToStore;
    angular.forEach($scope.p2pu, function(course){
      courseToStore = { name: course.name, short_description: course.short_description };
      console.log(courseToStore);
      p2puCourses.push(courseToStore);
    });

    chrome.storage.local.set({'p2pu': p2puCourses}, function() {
      var notification = webkitNotifications.createNotification(
        //TODO (Jose) This image does not work (even adding to the manifest)
        '../img/calculator-16.png', 
        'Saved!',
        'Courses have been saved successfully' 
      );
      notification.show();
    });
  }
}

function MyCourses($scope) {
  $scope.myCourses = [ 
    {name: 'My First Course', short_description: 'A fake course for now' },
    {name: 'My Second Course', short_description: 'Another fake course for now' }
  ];
}
