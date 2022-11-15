//window objesinin bazı metodları; alert, confirm, prompt etc.
//alert , pop up açılmasını sağlıyoruz.
// alert("merhaba");

// //confirm , pop up açılıyor,onay almak için kullanıyoruz.

// const cevap = confirm("emin misiniz?");
// console.log(cevap); //true ya da false olarak cevabı aldık.

//ifle birlikte görelim.

// if (confirm("emin misiniz?")) {
//   console.log("devam et");
// } else {
//   console.log("silin.");
// }

//prompt kullanarak kullanıcıdan input alıyoruz.
// const cevap = prompt("2+2=?");

// if (cevap == 4) {
//   console.log("doğru");
// } else {
//   console.log("yanlış");
// }

// let value;
// value = window;
// value = window.location;
// value = window.location.host;

// console.log(value);

// if (confirm("sayfa yenilensin mi?")) {
//   window.location.reload(); //sayfayı yenilemeyi sağlar.
// } else {
//   console.log("sayfa yenilenmedi.");
// }

value = window.outerHeight; //pencerenin boyutunu görüyoruz.
console.log(value);
