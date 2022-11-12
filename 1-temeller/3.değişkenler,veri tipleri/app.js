//değişken oluşturma
// var x=5;
// var y=2*x;
// var z=15;

// console.log(x,y,z);  ekranda 5 10 15 olarak verdi.

// 2 tür veri tipi var ;

//PRİMİTİVE VERİ TİPLERİ(İLKEL)


// var a=10;   number veri tipi
// console.log(typeof a);

// var name= "batu"; string veri tipi
// console.log(name);

// var x=true;    boolean veri tipi
// console.log(x);

// var a=null;   içinde bir değer taşımıyor null olduğu anlamına gelir
// console.log(a);



//REFERENCE VERİ TİPLERİ
//hepsinin tipi object olarak verilir.

// var numbers=[1,3,5];  //arraylar
// console.log(numbers);

// var person={
//     name:"irem",
//     age:25 }
// console.log(person);

// var merhaba = function() {      function yani object
//     console.log("merhaba");
// }
// console.log(merhaba);



//ÖNEMLİ

//primitive veri tipinde
var a=5;
b=a;
console.log(a,b);
a=8;
console.log(a,b);  //anın değeri değişti ancak b aynı kaldı.

//reference veri tipinde aynı şekilde değişim gerçekleşir.
