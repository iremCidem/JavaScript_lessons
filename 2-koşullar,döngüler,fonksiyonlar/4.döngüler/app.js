//while döngüsü
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }
// // break ve continue

// let j = 0;  //5te break ile karşılaştı ve döngü kırıldı.
// while (j<10){
//     console.log(j);
//     if(j == 5){
//         break;
//     }
//     j++;
// }

// let i = 0;
// while (i < 10) {
//   if (i == 3 || i == 5) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }
//do while döngüsü ; koşulu kontrol etmeden önce işlemi yapar.

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

const langs = ["Python", "Javascript", "Java"];
// let i = 0;
// while (i < langs.length) {
//   console.log(langs[i]);
//   i++;
// }

//for döngüsü
//arrayin içindeki elemanların üzerinde tek tek gezinmek iterasyon olarak adlandırılır.
// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i]);
// }

//for each metodu, ileride ayrıntılı görücez, iterasyon için kullanıyoruz.
// langs.forEach(function (lang) {
//   console.log(lang);
// });

//objelerden oluşan bir array yazalım.
// const users = [
//   { name: "irem", age: 24 },
//   { name: "batu", age: 30 },
//   { name: "sero", age: 24 },
// ]; //buradaki isimleri içeren bir array yazdırmak istiyoruz. map fonksiyonu kullanıcaz.

// const names = users.map(function (user) {
//   return user.name;
// });
// console.log(names);

//for in döngüsü
const user = {
  name: "irem",
  age: 24,
};
for (let key in user) {
  console.log(key, user[key]);
}
