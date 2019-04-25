import angular from 'angular';

import 'reset-css';
import './index.scss';

import login from './components/login-form';



angular.module('app', [ login ])
  .controller('AppController', function() {
    this.name = '';
  });