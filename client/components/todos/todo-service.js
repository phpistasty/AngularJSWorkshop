class TodoService {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  browseTodos() {
    return this.$q((res)=>{
      res({
        todos: [{
          id: 1,
          task: 'Build rest of app',
          done: false,
        }
      ]});
    })
  }

}

export default [
  '$http',
  '$q',

  TodoService
]

