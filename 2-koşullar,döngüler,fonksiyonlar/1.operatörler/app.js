// console.log(2 == 2);
// console.log("js" == "python");
// console.log("2" == 2);
// console.log("2" === 2);  //hem değerleri hem tipleri karşılaştırdığımız için false verdi.
// console.log(3 != 2);  //eşit değil midir? true
// console.log(2 != 2);  //eşit değil midir? false
// console.log(2 > 4);  
// console.log(2 < 4);  
// console.log(4 <= 4);  
// console.log(5 >= 4);  

//MANTIKSAL BAĞLAÇLAR

//not operatörü : !
// console.log  (!(5 >= 4));

// //and operatörü : &&, bütün koşullar true iken true döner.
// console.log(true && true);
// console.log(false && true);
// console.log(false && false);

// //or operatörü : || , sadece bir true bulunduğu sürece cevap true olur.
// console.log(false || true);
// console.log(false || false);

//if, else if, else;

// if(koşul){
//     //if block
// }
// else {
//     //diğer durum, koşul belirtmiyoruz.
// }

const user = "iremm";
if(user === "irem"){
    console.log("giriş yapıldı.");
}
else {
    console.log("kullanıcı bulunamadı.")
}

const islem = 3;
if(islem === 1){
 console.log("1.islem");
}
else if(islem === 2){
 console.log("2.islem");
}
else if(islem === 3){
 console.log("3.islem");
}
else {
    console.log("geçersiz islem...")
}

//ternary operator : eğer koşul içerisinde tek bir işlem varsa kısayol olarak kullanılabilir.

const sayi = 120;
console.log(sayi === 100 ? "sayı 100e eşit." : "sayı 100e eşit değil.")





