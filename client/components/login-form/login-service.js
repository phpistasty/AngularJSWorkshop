class LoginService {
  constructor($q, $http) {
    this._userProfile = '';
    this.$q = $q;
    this.$http = $http;
  }

  loginUser({username, password}) {
    return this.$q((resolve, reject) => {
      this.$http.post('/api/login', {username, password})
        .then((res)=>{
          resolve(res.data);
        })
        .catch((res) => {
          reject(res.data);
        });
    })
  }

  setUserProfile(profile) {
   this._userProfile
  }

  getUserProfile() {
    return this._userProfile;
  }
}

export default [
  '$q',
  '$http',
  LoginService,
];