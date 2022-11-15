//fonksiyon tanımlama

// function merhaba(){
//     console.log("merhaba");
// }

// merhaba(); //function call

// function person(name, age){
//     if ( typeof name === "undefined") name = "bilgi yok.";
//     if ( typeof age === "undefined") age = "bilgi yok.";
//     console.log(`isim: ${name}, yaş: ${age}`, );
// }

// person("irem",24);
// person(); //iflerle yaptığımız tanım sayesinde eğer bilgi girilmezse varsayılan değeri verdik.

// //varsayılan değeri daha kısa bir şekilde oluşturmak için;


// function person(name = "bilgi yok", age = "bilgi yok"){  //burada direkt olarak belirttik.

//     console.log(`isim: ${name}, yaş: ${age}`, );
// }
// person();

// function square(x){
//     return x*x;  // fonksiyondan bir değer döndürmek anlamına geliyor. console.log ile sadece yazdırıyoruz, bu şekilde kullanabileceğimiz bir değer haline geldi.
// }
// function cube(x){
//     return x*x*x; //bir fonksiyonu sonlandıran bir ifadedir.
// }
// // let a = square(2);
// // console.log(cube(a)); 

// let a = cube(square(2));
// console.log(a);

// function merhaba(){
//     return "merhaba";
// }

// console.log(merhaba());

//function expression

// const merhaba = function(name){
//     console.log("merhaba" + name);
// };

// merhaba("irem");

//immediately invoked function expression (IIFE)
//tanımlandığı yerde direkt çalışabilen bir fonksiyon türü

(function(name){
    console.log("merhaba" + name);  //burada fonksiyonun bir ismi yok.
})("irem");

//objenin içinde kullandığımız fonksiyona metod diyoruz.
//obje oluşturuyoruz.

const database = {
    host: "localhost",  //property
    add: function(){     //methodlar
        console.log("eklendi...");
    },
    get: function(){
        console.log("elde edildi...");
    }
};

console.log(database.host);
database.add();
database.get();


