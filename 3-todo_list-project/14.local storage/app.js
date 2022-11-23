//local storage - session storage ile aynı mantıktadır. - local storage tüm değerleri string olarak alır.

//setitem
// localStorage.setItem("hareket", "pushup");
// localStorage.setItem("hareket2", "squat");

// //getitem
// localStorage.getItem("hareket");

// //clear
// localStorage.clear();

// localStorage.setItem("hareket", "pushup");
// localStorage.setItem("hareket2", "squat");

// //array yazma - bu şekilde yapmamızın sebebi arrayleri bile string şeklinde eklemesini önlemek.
// const todos = ["todo1", "todo2", "todo3"];
// localStorage.setItem("todos", JSON.stringify(todos));

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");

form.addEventListener("submit", addTodo);
function addTodo(e) {
  const value = todoInput.value;
  //aldığımız değerleri array olarak yazdırmak istiyoruz ancak eğer array yoksa baştan oluşturmalıyız, varsa üzerine eklemeliyiz.
  //yoksa oluştur,varsa ekle.

  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(value);
  localStorage.setItem("todos", JSON.stringify(todos));
  e.preventDefault();
}
