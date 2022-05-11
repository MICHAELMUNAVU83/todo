window.addEventListener("load", function () {
  let form = document.querySelector("#new-task-form");
  let input = document.querySelector("#new-task-input");
  let list_el = document.querySelector("#tasks");
  let task = input.value;
  console.log(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let task = input.value;

    if (task == "") {
      alert(12);
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.value = task;
    task_input_el.type = "text";

    const task_actions_el = document.createElement("div");
    task_content_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_delete_el);
    task_actions_el.appendChild(task_edit_el);

    task_content_el.appendChild(task_input_el);

    task_el.appendChild(task_content_el);
    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);
    input.value = ''

    task_delete_el.addEventListener("click", function () {
      list_el.removeChild(task_el);
    });
  });
});
