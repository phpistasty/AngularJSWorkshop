import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import 'reset-css';
import './index.scss';

import login from './components/login-form';



angular.module('app', [ login, uiRouter ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) => {

    $stateProvider
    .state('app', {
      abstract: true,
      views:{
        'main@': {
          template: '<div>Main template not provided</div>',
        }
      }
    })
    .state('app.secure', {
      abstract: true,
      resolve: {
        'AuthenticatedUser' : requireAuth
      }
    })
    .state('app.public', {
      abstract: true,
    })
    .state('app.public.login', {
      url: '/login',
      views: {
        'main@': {
          template: '<login-form />'
        },
      }
    });

    $urlRouterProvider.otherwise('/login');
    $locationProvider.html5Mode(true);

    requireAuth.$inject =['LoginService'];
    function requireAuth(LoginService) {
      return LoginService.getAuthorization();
    }

  }]);