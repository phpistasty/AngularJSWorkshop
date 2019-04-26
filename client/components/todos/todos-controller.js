class TodosController {


  constructor(TodoService) {
    this.TodoService = TodoService;
  }

  $onInit() {
    this.onUpdate = ::this.onUpdate;
    this.onAdd = ::this.onAdd;
  }

  onUpdate({taskId, key, value}) {
    this.list[taskId][key] = value;
  }

  onAdd(task) {
    console.log(task);
    this.list = [
      ...this.list,
      {
        id: ++this.list.length,
        task: task,
        done: false,
      }
    ]
  }

}

export default [
  'TodoService',

  TodosController
]