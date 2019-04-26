class TodoListItemController {

  $onInit() {
    this.isDone = this.item.done;
  }

  updateTodo(key, value) {
    this.onChange({
      evtData: {
        key,
        value
      }
    })
  }

}

export default [
  TodoListItemController,
  ];