class LoginService {
  constructor($q, $http, $cookies) {
    this._userProfile = {};
    this.$q = $q;
    this.$http = $http;
    this.$cookies = $cookies;

    const username = this.$cookies.get('username');
    if (username) {
      this.setUserProfile({ username });
    }

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
    });
  }

  getAuthorization() {
    if(this._userProfile && this._userProfile.username) {
      return this.$q.when(this._userProfile);
    } else {
      return this.$q.reject({});
    }
  }

  setUserProfile(profile) {
    this.$cookies.put('username', profile.username);
    this._userProfile = profile;
  }

  getUserProfile() {
    return this._userProfile;
  }
}

export default [
  '$q',
  '$http',
  '$cookies',
  LoginService,
];