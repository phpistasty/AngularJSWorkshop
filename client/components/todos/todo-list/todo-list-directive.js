import template from './todo-list.tpl.html';
import {default as controller} from './todo-list-controller';

export default function todoListDirective() {

  return {
    scope: {
      list: '<',
      onChange: '&'
    },
    template,
    controller,
    controllerAs: 'ctrl',
    bindToController: true,
  };

}