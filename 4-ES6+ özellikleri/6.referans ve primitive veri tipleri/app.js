//primitive veri tipleri
// let a = "mustafa";
// let b = "mustafa";
// if (a === b) {
//   console.log("eşitler");  //primite veri tiplerinde karşılaştırma yaparken değişkenin içine bakıldı.
// }

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
if (arr1 === arr2) {
  console.log("eşit."); //yazmadı çünkü içerisi false, referans veri tiplerinde içindeki değere değil bu referanslar bellekte aynı yeri gösteriyor mu diye bakıyor.
}

const cities = new Map();
cities.set([1, 2, 3], "array");
cities.set("key3", "array");
const arr = [1, 2, 3];
cities.set(arr, "array");

console.log(cities.get([1, 2, 3]));
console.log(cities.get("key3"));
console.log(cities.get(arr));

//referans veri tipleri bellekteki yere göre kıyaslama yaparken,primitive veri tipleri değere göre karşılaştırma yapar.
