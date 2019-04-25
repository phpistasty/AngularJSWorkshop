import angular from 'angular';

import loginForm from './login-form-directive';
import LoginService from './login-service';

export default angular.module('login', [])
  .directive('loginForm', loginForm) // <login-form>
  .service('LoginService', LoginService)
  .name;