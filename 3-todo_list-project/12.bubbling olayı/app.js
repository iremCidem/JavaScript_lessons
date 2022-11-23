//event bubbling //bu şekilde dışarıdan yaptığımız müdahale içindeki elemanı da etkiledi.h5e basarak aynı anda 3 durumuda etkiledi.
// document.querySelector(".container").addEventListener("click", function () {
//   console.log("container");
// });
// document.querySelector(".card.row").addEventListener("click", function () {
//   console.log("card-row");
// });
// document.querySelector(".card-body").addEventListener("click", function () {
//   console.log("card-body");
// });

//event capturing veya delegation
const cardbody = document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click", run);
function run(e) {
  if (e.target.className == "fa fa-remove") {
    console.log("silme işlemi.");
  }
  console.log(e.target);
} //bu şekilde card-body içindeki her elemenı tıklayarak ne olduğunu görebildik. bu şekilde o elemana dinamik bir şekilde etki uygulayabiliriz.
