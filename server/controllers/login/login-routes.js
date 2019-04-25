const Router = require('express').Router;

const controller = require('./login-controller');

module.exports = () =>{
  const loginRouter = Router();

  loginRouter.post('/login', controller.loginHandler);

  return loginRouter;
};