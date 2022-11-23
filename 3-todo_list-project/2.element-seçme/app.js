let element;
let value;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

element = document.getElementsByClassName("list-group-item");

element = document.getElementsByTagName("li");

//query selector - css selector , tek bir element seçer, ilk bulduğunu.

element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");

//query selector all ile hepsini seçebiliriz.

element = document.querySelectorAll("#tasks-title");
element = document.querySelectorAll(".list-group-item");
element = document.querySelectorAll("li");
value = element.forEach(function (index) {
  console.log(index);
});

console.log(element);
console.log(value);
