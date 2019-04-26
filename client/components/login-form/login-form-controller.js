class LoginFormController {

  constructor($state, LoginService) {
    this.LoginService = LoginService;
    this.$state = $state;
    this.error = '';
    this.loggedIn = false;
  }

  submitLogin(username, password) {

    if (username.length && password === "password") {
      this.error = '';
      this.loggedIn = true;
      this.LoginService.loginUser({username, password})
        .then(()=>{
          this.$state.go('app.secure.todos');
        })
        .catch((err)=>{
          this.error = err.error;
        });
    } else {
      this.error = 'Invalid Password';
    }
  }

}

export default [
  '$state',
  'LoginService',

  LoginFormController,
];