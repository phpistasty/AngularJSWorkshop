import angular from 'angular';
import todosDirective from './todos-directive';

export default angular.module('app.todo-list', [])
  .directive('todos', todosDirective)
  .name;