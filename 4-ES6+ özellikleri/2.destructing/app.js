//destructing arraylarin veya objelerin içinden değerlerimizi almak için kullandığımız kısa bir yol.
// let number1, number2;
// arr = [100, 200, 300, 400];
// [number1, number2] = arr;

// console.log(number1, number2); //100 ve 200 olarak değerlerimizi aldık.
//daha da kısa olarak;
// arr = [100, 2, 5, 800];
// const [number1, number2] = arr;
// console.log(number1, number2);

//objeler üzerinde görelim;
// const numbers = {
//   //buradaki a b ve d değerlerini başka bir değere atamak istiyoruz.
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
// };
// const { a: number1, b: number2, d: number3 } = numbers;
// console.log(number1, number2, number3);

//function destructing
// const Langs = () => ["PYTHON", "JAVA", "C++"];

// const [Lang1, Lang2] = Langs();
// console.log(Lang1, Lang2);

const person = {
  name: "irem",
  age: 24,
  showInfos: () => console.log("bilgiler yazılıyor..."),
};
//bu bilgileri 3 farklı değişkene atayalım.
const { name: nameInfo, age: ageInfo, showInfos: showInfo } = person;
console.log(nameInfo, ageInfo);
showInfo();

const hello = {
  name: "irem",
  surname: {
    kızlık: "adasd",
    şimdiki: "dasdadadad",
  },
};

const {
  name,
  surname: { kızlık, şimdiki },
} = hello;
