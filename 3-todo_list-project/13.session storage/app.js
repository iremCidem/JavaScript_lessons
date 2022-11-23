//session storage ; oturum açık kaldığı sürece burada depolanan veriler burada kalıyor, kapatıldığında silinir.key value şeklinde depolama yapıyoruz.
//local storage da biz silmediğimiz sürece verilerimiz saklanıyor.

//buttonlar
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");
//inputlar
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const delkey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItem);

function addItem(e) {
  sessionStorage.setItem(addkey.value, addvalue.value);
}
function deleteItem(e) {
  sessionStorage.removeItem(delkey.value);
}
function clearItem(e) {
  sessionStorage.clear();
}
