// projemizde çok sayıda obje oluşturmamız gerekebilir bunun için bir metod kullanalım.CONSTRUCTOR
//bir constructor(yapıcı fonksiyon) oluşturalım.bir fonksiyon oluşturuyoruz ve içine objenin hangi özellik ve metodları alacağını giriyoruz.

// function Employee() {
//   //yapıcı fonksiyon,constructor.
//   this.name = "irem"; //objenin name özelliği irem olsun dedim.
// }
// //bu fonksiyondan objeyi üretmek için,

// const emp1 = new Employee();
// console.log(emp1);

function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;

  console.log(this); //this artık içinde bulunduğu objemiz
}

const emp1 = new Employee("irem", 24, 8000);
const emp2 = new Employee("batu", 30, 18000);
