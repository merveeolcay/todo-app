const todoInput = document.querySelector(".todo-add"),
  addTodoBtn = document.querySelector(".todo-add-btn"),
  clearTodosBtn = document.querySelector(".todo-clear-btn"),
  completeTodo = document.querySelector(".todo-complete"),
  searchInput = document.querySelector(".todo-search"),
  deleteCompletedBtn = document.querySelector(".todo-completed-btn"),
  todoForm = document.querySelector(".todo-form"),
  todosContainer = document.querySelector(".todo-list");

todoForm.addEventListener("submit", addTodo);

clearTodosBtn.addEventListener("click", clearTodos);

searchInput.addEventListener("keyup", searchTodo);

deleteCompletedBtn.addEventListener("click", deleteCheckedTodos);

function addTodo(event) {
  event.preventDefault();
  let todoValue = todoInput.value;
  let todoHtml = `
    <li class="todo-wrapper">
    <div class="todo-text">${todoValue}</div>
    <div class="todo-icons">
      <div onclick="checkTodo(event)" class="todo-complete">
        <i class="fa-regular fa-square-check"></i>
      </div>
      <div onclick="removeTodo(event)" class="todo-delete">
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>
  </li>`;

  todosContainer.insertAdjacentHTML("beforeend", todoHtml);
  todoInput.value = "";
}

function clearTodos() {
  const todos = document.querySelectorAll(".todo-wrapper");
  for (let i = 0; i < todos.length; i++) {
    todos[i].remove();
  }
}

function removeTodo(event) {
  const todoWrapper = event.target.parentElement.parentElement.parentElement;
  todoWrapper.remove();
}

function checkTodo(event) {
  const todoText = event.target.parentElement.parentElement.previousElementSibling;
  todoText.classList.toggle("line-through");
}

function searchTodo(event) {
  const searchValue = event.target.value;
  const todos = document.querySelectorAll(".todo-wrapper");

  for (let i = 0; i < todos.length; i++) {
    const todoText = todos[i].querySelector(".todo-text").textContent;
    if (todoText.indexOf(searchValue) > -1) {
      todos[i].classList.remove("todo-hide");
    } else {
      todos[i].classList.add("todo-hide");
    }
  }
}

function deleteCheckedTodos(event){
  
  const todos = document.querySelectorAll(".todo-wrapper");
  for (let i = 0; i < todos.length; i++) {
  const checkedTodos = todos[i].querySelector(".todo-text.line-through");
  if(checkedTodos){
    todos[i].remove();
  }
  }
}