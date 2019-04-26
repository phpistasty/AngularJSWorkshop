import angular from 'angular';

import todosDirective from './todos-directive';
import todoListDirective from './todo-list/todo-list-directive';
import todoListItemDirective from "./todo-list/todo-list-item/todo-list-item-directive";
import todoFormDirective from './todo-form/todo-form-directive';

import TodoService from "./todo-service";

export default angular.module('app.todo-list', [])
  .directive('todos', todosDirective)
  .directive('todoList', todoListDirective)
  .directive('todoListItem', todoListItemDirective)
  .directive('todoForm', todoFormDirective)
  .service('TodoService', TodoService)
  .name;