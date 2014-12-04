'use strict';

angular.module('myAppRename.teacher', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/teacher', {
                templateUrl: 'app/teacherView/teacherMain.html',
                controller: 'AdminCtrl'
            })
            .when('/teacher/createUser', {
                templateUrl: 'app/teacherView//createUser.html',
                controller: 'AdminCtrl'
            });
    }])
    .controller('AdminCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.message = 'AdminCtrl';

        $http({
            method: 'GET',
            url: 'userApi/test'
        })
            .success(function (data, status, headers, config) {
                $scope.info = data;
                $scope.error = null;
            }).
            error(function (data, status, headers, config) {
                if (status == 401) {
                    $scope.error = "You are not authenticated to request these data";
                    return;
                }
                $scope.error = data;
            });

     /*   $scope.submit = function () {
            $http
                .post('/authenticate', $scope.user)
                .success(function (data, status, headers, config) {
                    $window.sessionStorage.token = data.token;
                    $scope.isAuthenticated = true;
                    $scope.username = profile.username;
                    $scope.isAdmin = profile.role == "admin";
                    $scope.isUser = !$scope.isAdmin;
                    $scope.error = null;
                })
                .error(function (data, status, headers, config) {
                    // Erase the token if the user fails to log in
                    delete $window.sessionStorage.token;
                    $scope.isAuthenticated = false;

                    $scope.error = 'You failed to login. Invalid User or Password';
                });
        };
*/
    }]);
