/**
 * Created by vsrut on 24-02-2016.
 */

(function(){
    'use strict';

    angular
        .module('movieflix')
        .service('loginService',loginService);

    loginService.$inject = ['$http','$q'];
    function loginService($http, $q){

        var self = this;

        self.authenticateUserRequest = function(loginInfo){

            var defer = $q.defer();

            $http
                .post('http://localhost:8080/...../authenticateUser...',loginInfo)
                .then(function(response){
                    console.log(response.data);
                    defer.resolve(response.data);
                }, function (error) {
                    defer.reject(error.status);
                });

            return defer.promise;
        };

        self.addUserRequest = function(user){

            var defer = $q.defer();

            $http
                .post('http://localhost:8080/...../authenticateUser...',user)
                .then(function(response){
                    console.log(response.data);
                    defer.resolve(response.data);
                }, function (error) {
                    defer.reject(error.status);
                });

            return defer.promise;
        };
    }

})();
