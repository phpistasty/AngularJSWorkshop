class TodoListController {

  onUpdate(taskId, {key, value}) {
    this.onChange({
      evtData: {
        taskId,
        key,
        value
      }
    })
  }

}

export default [
  TodoListController,
]