'use strict';

angular.module('myAppRename.student', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/student', {
    templateUrl: 'app/studentView/studentMain.html',
    controller: 'studentMainCtrl'
  });
}])

.controller('studentMainCtrl', function ($scope, $http) {
    $scope.message = 'studentMainCtrl';

    $http({
      method: 'GET',
      url: 'adminApi/user'
    }).
      success(function (data, status, headers, config) {
        $scope.users = data;
         $scope.error = null;
      }).
      error(function (data, status, headers, config) {
        if(status == 401){
          $scope.error ="You are not authenticated to request these data";
            return;
        }
        $scope.error = data;
      });
});



