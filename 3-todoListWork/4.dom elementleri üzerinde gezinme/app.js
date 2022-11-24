let value;
const todolist = document.querySelector(".list-group");
const todo = document.querySelector("li:nth-child(2)");
const cardrow = document.querySelector(".card.row");

// //child nodes - textleri de alır.
// value = todolist.childNodes;
// //children özelliği - sadece elementleri alır.
// value = todolist.children;
// value = todolist.children[0];
// value.textContent = "değişti.";

// value = cardrow.children;
// value = cardrow.children[2].children;
// value = cardrow.children[2].children[1];
// value.textContent = "burası da değişti.";

value = todolist.children;
value = todolist.firstElementChild;

value = cardrow.parentElement;

//element kardeşleri , parenti ortak olanlar :sibling.
value = todo;
value = todo.previousElementSibling; //bir önceki kardeş
value = todo.nextElementSibling; //bir sonraki kardeş
value.style.color = "pink";

console.log(value);
