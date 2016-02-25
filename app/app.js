/**
 * Created by vsrut on 24-02-2016.
 */
(function(){
    'use strict';

    angular.module('movieflix',['ui.router'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function moduleConfig($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('app',{
                url:'/',
                views:{
                    'header':{
                        templateUrl:"app/views/header.html",
                        controller: 'Login',
                        controllerAs: 'login'
                    },
                    'content':{
                        templateUrl: 'app/views/home.tmpl.html'
                    },
                    'subcontent':{
                        template: ''
                    },
                    'footer':{
                        templateUrl: 'app/views/footer.html'
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    }
})();