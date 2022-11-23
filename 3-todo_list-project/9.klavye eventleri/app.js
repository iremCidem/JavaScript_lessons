//klavye eventleri
//bu şekilde dokümana bir event atıyoruz.

//keypress klavyede herhangi bir tuşa bastığımız zaman çalışan bir event, sadece sayılar ve harfler için geçerli.
// document.addEventListener("keypress", run);
// function run(e) {
//   //   console.log("naber");
//   // console.log(e.which); //bu şekilde bastığımız tuşun ascii tablosundaki değerini elde ediyoruz.
//   console.log(e.key); //bastığımız tuşu görebiliriz.
// }

//keydown  klavyedeki tüm tuşlar için geçerli.
// document.addEventListener("keydown", run);
// function run(e) {
//   console.log(e.key);
// }

//keyup bastığımız tuşu bıraktığımız zaman okunur.
// document.addEventListener("keyup", run);
// function run(e) {
//   console.log(e.key);
// }

// PROJE
const cardtext = document.querySelector(".card-header");
const cardinput = document.querySelector("#todo");

cardinput.addEventListener("keyup", run);
function run(e) {
  //bu şekilde input içindeki değerleri alıyoruz.
  value = e.target.value;
  cardtext.textContent = value;
}
