class TodoFormController {

  $onInit() {
    this.task = '';
  }

  submit(task) {
    if (task.length) {
      this.onSubmit({ task });
      this.task = '';
    }
  }

}

export default [
  TodoFormController,
];