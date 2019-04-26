import template from './todo-list-item.tpl.html';
import { default as controller } from './todo-list-item-controller';

export default function todoListItemDirective() {

  return {
    scope: {
      item: '<',
      onChange: '&'
    },
    template,
    controller,
    controllerAs: 'ctrl',
    bindToController: true,
  }
}