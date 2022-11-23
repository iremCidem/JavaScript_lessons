const todoForm = document.querySelector("#todo-form");
const formInput = document.querySelector("#todo");
const todolist = document.querySelector(".list-group");
const cardbodyf = document.querySelectorAll(".card-body")[0];
const cardbodys = document.querySelectorAll(".card-body")[1];
const filterInput = document.querySelector("#filter");
const clearbutton = document.querySelector("#clear-todos");

allEvents();
function allEvents() {
  todoForm.addEventListener("submit", addTodo);
}

function addTodo(e) {
  const newTodo = formInput.value.trim(); //yazının başında veya sonunda boşluk varsa onları kaldırır.
  addTodotoUI(newTodo); //arayüze (UI) yeni element ekleyecek olan fonksiyon
  e.preventDefault();
}
function addTodotoUI(newTodo) {
  //  <li class="list-group-item d-flex justify-content-between">
  //                     Todo 1
  //                     <a href="#" class="delete-item">
  //                         <i class="fa fa-remove"></i>
  //                     </a>
  //                 </li>
  //list item oluşturma
  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between";
  //link oluşturma
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  //text node ekleme
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todolist.appendChild(listItem);
  formInput.value = ""; //değer eklendikten sonra input içinden siliniyor.
}
