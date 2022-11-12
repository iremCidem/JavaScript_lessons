// var name="irem";   //ekrana seroyu yazdı
// var name="sero";
// console.log(name);    

// let name="irem";   //hata verdi zaten tanımlanmıştı diye. 
// let name="sero";
// console.log(name); 

// "constant"tan geliyor.
// const name="irem";  //hata verdi
// console.log(name);
// name="sero";
// console.log(name);

// const a;   //hata verdi const ile böyle bir kullanım yapamıyoruz.
// a=10;
// console.log(a);

// const a=[1,2,3];  //hata aldık çünkü const ile yaptığımız tanımlamada yerini değiştirmeye çalıştık.
// console.log(a);
// a=[1,2,3,4];
// console.log(a);


const a=[1,2,3];  //hata almadan yazdırdık çünkü sadece ekleme yaptık, yer değişikliği değil.
console.log(a);
a.push (4);
console.log(a);