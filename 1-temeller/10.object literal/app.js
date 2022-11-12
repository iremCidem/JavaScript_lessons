let value;
//aşağıdakinin tamamı bir obje.
const programmer = {
    name : "irem",
    age : 24,
    languages : ["python", "javascript"],
    address : {
        city : "eskişehir",
        street : "yediler",
    },
    work : function()
    { console.log("programcı çalışıyor.");}

}
value = programmer;
value = programmer.address;
value = programmer.address.city;
value = programmer.work();

console.log(value);


//objelerden oluşan bir array yazalım.
let new_value;
const programmers = [
    {name:"irem", age:"24"},
    {name:"batu", age:"30"}
];
new_value = programmers;
new_value = programmers[1];
console.log(new_value);