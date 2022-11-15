//javascriptte 3 farklı scope bulunur(kapsam)1-global scope,2-function scope,3-block scope

//Global scope  //genel olarak verilen değer

//function scope function a() {} //sadece fonksiyona ait değerler veririz.

//Block scope if,while,for etc.  //sadece bloğa ait değerler veririz.
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a);
console.log(b); //be ve cyi yazdırmadı çünkü if içindeki let ve const değerleri dışarıda okunmaz.
console.log(c);
