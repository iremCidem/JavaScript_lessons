// const element = document.querySelector("#clear-todos");
// console.log(element);
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//style ve element özelliklerini değiştirme

// element.className = "btn btn-danger";
// element.style.color = "#000";
// element.href = "https://www.google.com.tr/";
// element.target = "_blank"; // bu şekilde google yan sekmede açıldı.
// element.textContent = "google";
// element.innerHTML = "<span>Google</span>"; //bu şekilde html etiketiyle yazabiliriz.
// console.log(element);

// element = document.querySelectorAll("li");
// element.forEach(function (index) {
//   index.style.color = "orange";
//   index.style.background = "yellow";
// });

element = document.querySelector("li:first-child");
element = document.querySelector("li:last-child");
element = document.querySelector("li:nth-child(2)");
element.style.color = "orange";
console.log(element);
