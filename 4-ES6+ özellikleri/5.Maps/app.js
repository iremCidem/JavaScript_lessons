//map metodu, key-value (key ve de value tüm veri tiplerinden olabilirler.) (objelere benzer ancak farklı olarak her veri tipi key olarak tanımlanabilir.)

// let myMap = new Map(); //oluşturma

// const key1 = "irem";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 30;

// myMap.set(key1, "string değer");
// myMap.set(key2, "object literal değer");
// myMap.set(key3, "function değer");

// //mapin içinden bir keye karşılık gelen değeri alabilmek için,
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// const cities = new Map();
// cities.set("ankara", 5);
// cities.set("istanbul", 15);
// cities.set("izmir", 4);

// cities.forEach(function (value, key) {
//   console.log(key, value);
// });
// for off ile gezinelim
// for (let value of cities) {
//   console.log(value); //array olarak oluştuğunu gördük o zaman destructing ile öğeleri alabiliriz.
// }
// for (let [key, value] of cities) {
//   console.log(key, value);
// }
//sadece keyler üzerinde gezinmek istersek
// for (let key of cities.keys()) {
//   console.log(key);
// }
// //sadece valueler üzerinde gezinmek istersek
// for (let key of cities.values()) {
//   console.log(key);
// }
// //arraylerden map oluşturma
// const arr = [
//   ["key1", "value1"],
//   ["key2", "value2"],
// ];
// const lastMap = new Map(arr);
// console.log(lastMap);

//maplerden array oluşturma
const cities = new Map();
cities.set("ankara", 5);
cities.set("istanbul", 15);
cities.set("izmir", 4);

const arr = Array.from(cities);
console.log(arr); // içinde 3tane array bulunduran bir array oluşturduk.
