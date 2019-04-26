import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngCookies from 'angular-cookies';

import 'reset-css';
import './index.scss';

import login from './components/login-form';
import todos from './components/todos';


angular.module('app', [ uiRouter, ngCookies, login, todos ])
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
      //abstract: true,
      resolve: {
        'AuthenticatedUser' : requireAuth
      },
      views: {
        'main@': {
          template: '<div>Main not provided</div>'
        }
      }
    })
    .state('app.secure.todos', {
      url: '/todo',
      views: {
        'main@': {
          template: '<todos />'
        }
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

    requireAuth.$inject =['LoginService', '$q', '$state'];
    function requireAuth(LoginService, $q, $state) {
      return LoginService.getAuthorization()
        .then((account) => {
          return $q.when(account);
        })
        .catch(() => {
          $state.go('app.public.login');
          return $q.reject();
        });

    }

  }])
  .run(['$state', ($state) => {
    $state.defaultErrorHandler((err) => {
      console.error(err);
    });
  }]);