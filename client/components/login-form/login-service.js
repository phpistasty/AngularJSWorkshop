class LoginService {
  constructor($q, $http) {
    this._userProfile = {};
    this.$q = $q;
    this.$http = $http;
  }

  loginUser({username, password}) {
    return this.$q((resolve, reject) => {
      this.$http.post('/api/login', {username, password})
        .then((res)=>{
          this.setUserProfile(res.data);
          resolve(res.data);
        })
        .catch((res) => {
          reject(res.data);
        });
    })
  }

  getAuthorization() {
    if(this._userProfile && this._userProfile.name) {
      this.$q.when(this._userProfile);
    } else {
      this.$q.reject({});
    }
  }

  setUserProfile(profile) {
   this._userProfile = profile;
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