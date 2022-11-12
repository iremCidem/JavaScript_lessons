let value;

// veri tipini string yapma,fonksiyon,array,sayı etc. her şeyi stringe dönüştürebiliyoruz.

// value=123;
// console.log(typeof value);  number olarak verdi.

//  value= String(123);
//  console.log(typeof value);  string olarak verdi.

// value= String([1,2,3]);
// console.log(typeof value); string olarak verdi.

// value=(10).toString (); 
// console.log(typeof value); string olarak verdi, bu kullanımda mevcut.

// veri tipini number yapma;

// value=Number ("123");  //bu bir string değerdi ancak içinde sadece rakamlar olduğu için bunu number olarak değiştirebildik.
// value=Number("irem"); // NaN yani not a number olarak verdi.
// value=Number(null); //boş olan değeri number yaptık.
// value=Number([1,2,3]); // NaN yani not a number olarak verdi.

// console.log(value); 
// console.log(typeof value); 

//otomatik çevirme işlemleri


//const a= "irem"+24; //ikisini de string olarak algılayıp topladı.
//const a="32"+20;  //3220 olarak verdi.
const a= Number("32")+20; //52 olarak verdi.

console.log(a);   
console.log(typeof a); 
















