import template from './todos.tpl.html';
import { default as controller } from './todos-controller';

export default function() {

  return {
    restrict: 'E',
    scope: {
      list: '=',
    },
    template,
    controller,
    controllerAs: 'ctrl',
    bindToController: true,
  };

}