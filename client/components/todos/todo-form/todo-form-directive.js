import { default as controller } from './todo-form-controller';
import template from './todo-form.tpl.html';

export default function() {

  return {
    scope: {
      onSubmit: '&',
    },
    template,
    controller,
    bindToController: true,
    controllerAs: 'ctrl',
  }

}