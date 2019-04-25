class LoginFormController {

  constructor(LoginService) {
    this.LoginService = LoginService;
    this.error = '';
    this.loggedIn = false;
  }

  submitLogin(username, password) {
    if (username.length && password === "password") {
      this.error = '';
      this.loggedIn = true;
      this.LoginService.setUserProfile({ username });
    } else {
      this.error = 'Invalid Password';
    }
  }

}

export default [
  'LoginService',

  LoginFormController,
];