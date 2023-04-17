const todoInput = document.querySelector(".todo-add"),
  addTodoBtn = document.querySelector(".todo-add-btn"),
  clearTodoBtn = document.querySelector(".todo-clear-btn"),
  completeTodo = document.querySelector(".todo-complete"),
  deleteTodo = document.querySelector(".todo-delete"),
  searchInput = document.querySelector(".todo-search"),
  deleteCompletedBtn = document.querySelector(".todo-completed-btn"),
  todoForm = document.querySelector(".todo-form"),
  todosContainer = document.querySelector(".todo-list");


todoForm.addEventListener("submit", addTodo);

clearTodoBtn.addEventListener("click", clearTodos);

function addTodo(event) {
  event.preventDefault();
  let todoValue = todoInput.value;
  let todoHtml = `
    <li class="todo-wrapper">
    <div class="todo-text">${todoValue}</div>
    <div class="todo-icons">
      <div class="todo-complete">
        <i class="fa-regular fa-square-check"></i>
      </div>
      <div class="todo-delete">
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>
  </li>`;

  todosContainer.insertAdjacentHTML("beforeend", todoHtml);
  todoInput.value = "";
}

function clearTodos() {
    const todos = document.querySelectorAll(".todo-wrapper")
    for (let i = 0; i < todos.length; i++){
        todos[i].remove()
    }
}
