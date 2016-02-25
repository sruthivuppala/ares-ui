/**
 * Created by vsrut on 24-02-2016.
 */

angular
    .module('movieflix')
    .controller('Login',Login);

Login.$inject =['loginService'];

function Login(loginService){
    var login=this;

    var loginInfo;
    var userInfo;
    //loginInfo.password = login.password;

    login.authenticateUser = function () {
        loginService
            .authenticateUserRequest(loginInfo)
            .then(function(data){
                console.log("User is authenticated successfully");
            }, function (error){
                console.log(error);
            })
    };

    login.addUser = function(){
        loginService
            .addUserRequest(userInfo)
            .then(function(data){
                console.log("User added successfully");
            }, function (error){
                console.log(error);
            })
    };
}