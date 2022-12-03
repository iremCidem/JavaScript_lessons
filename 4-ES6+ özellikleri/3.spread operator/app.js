// const Langs = ["PYTHON", "JAVA", "C++"];
// //console.log(Langs[0], Langs[1], Langs[2]); bunu daha kısa şekilde yazabilmek için spread operatörü kullanıyoruz.

// const Langs2 = ["JavaScript", "C#", ...Langs];
// console.log(...Langs2);

const addNumbers = (a, b, c) => console.log(a + b + c);
const numbers = [100, 200, 300];

//addnumbers fonksiyonuna numbers değerlerini göndermek için eski şekilde;
//addNumbers(numbers[0], numbers[1], numbers[2]);
//spread metodu ile
addNumbers(...numbers); //600verdi.
