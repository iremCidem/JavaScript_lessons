//setler (kümeler) - 1değeri sadece 1defa taşır. (arraylere benzer ancak aynı değer 1den fazla eklenemez.)

// const mySet = new Set();
// mySet.add("irem");
// mySet.add([1, 2, 3]);
// mySet.add(true);
// mySet.add(10);
// mySet.add(10); //2.defa 10 değerini eklemedi.
// console.log(mySet);

//hepsini bir arada oluşturabilmek için;
//const mySet2 = new Set(["irem", 3.14, true, 10]);

//has metodu -delete metodu
// mySet2.delete("irem");
// console.log(mySet2.has("irem"));
// console.log(mySet2.has(3.14));
// console.log(mySet2);

//foreach ile gezinelim.
// mySet2.forEach(function (value) {
//   console.log(value);
// });

//for of ile gezinelim
// for (let value of mySet2) {
//   console.log(value);
// }

//setlerden array oluşturma
const mySet2 = new Set(["irem", 3.14, true, 10]);
const arr = Array.from(mySet2);
console.log(arr);
