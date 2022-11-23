// yeni element oluşturma
// <a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

// const newlink = document.createElement("a");
// const cardbody = document.querySelectorAll(".card-body")[1];
// const button_text = document.createTextNode("GOOGLE");

// newlink.id = "new-button";
// newlink.className = "btn btn-large btn-success";
// newlink.href = "https://www.google.com.tr/";
// newlink.target = "_blank";
// // newlink.textContent = "GOOGLE";  BU SAĞLIKLI BİR YOL DEĞİL.
// //text node kullanalım.

// //bunu da cardbody nin en altına ekleyeceğiz.
// // cardbody.appendChild(button_text);
// newlink.appendChild(button_text);
// cardbody.appendChild(newlink);
// console.log(newlink);

//dinamik element silme

const todolist = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li");

//remove metodu
todos[0].remove();
// todolist.removeChild(todolist.lastElementChild);
todolist.removeChild(todos[2]);

console.log(todolist);
console.log(todos);
