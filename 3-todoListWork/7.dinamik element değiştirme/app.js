const todoInput = document.querySelector("#todo");
let element;

//yeni class vermek için 2 yolumuz var,
//todoInput.className = "form-control newclass newtodo";
todoInput.classList.add("newclass");
todoInput.classList.remove("newclass");

element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder", "naber");
todoInput.setAttribute("title", "input");

element = todoInput;

console.log(element);
