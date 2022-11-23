const filterInput = document.querySelector("#filter");

//biz bu inputa bastığımız zaman aslında bir focus eventi oluşmuş oluyor.biz bu eventi javascriptte yakalayabiliriz.
//1.yöntem
// filterInput.onfocus = function () {
//   console.log("onfocus özelliği etkin.");
// };

// //2.yöntem - addeventlistener metodu

// filterInput.addEventListener("focus", function () {
//   console.log("focus özelliği etkin.");
// }); //focus özelliğini belirttik.
filterInput.addEventListener("focus", function (event) {
  //console.log("focus özelliği etkin.");
  console.log(event);
  console.log(event.target); //eventin oluştuğu yer.
});

const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", submitForm);
function submitForm(e) {
  console.log("submit"); //bu şekilde formu gönderdiği için submit yazısını saniyelik gördük.
  e.preventDefault(); //default özelliğini engelleyerek sayfanın yenilenmesini engelliyoruz.
}
