const filter = document.querySelector("#filter");
//dom content loaded, içerik yüklendikten sonra direkt olarak oluşsan bir event
// document.addEventListener("DOMContentLoaded", run);
// function run(e) {
//   console.log("sayfa yüklendi");
// }

//focus eventi, input alanına focuslandığı zaman gerçekleşir.
// filter.addEventListener("focus", run);
// function run(e) {
//   console.log(e.type);
// }

//blur eventi, input alanına odaktan çıktığımız zaman gerçekleşir.
filter.addEventListener("blur", run);
function run(e) {
  console.log(e.type);
}
// cut, select, copy ve paste eventleri
