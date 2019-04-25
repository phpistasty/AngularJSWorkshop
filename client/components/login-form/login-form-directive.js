import controller from './login-form-controller';
import template from './login-form.tpl.html';
import './login-form.scss';

export default function() {
  return {
    template,
    controller,
    controllerAs: 'ctrl',
  };
}