let value;

const numbers = [1,5,15,8,65];
const langs = ["python","javascript","c++"];
const mix = [12,3.14,null,"react",undefined];
//const numbers = new Array(1,2,3); bu da farklı bir array oluşturma metodu.


value = numbers.length;

//herhangi bir indexteki değeri değiştirmek için;
numbers[2] = 85;
value = numbers;

//kaçıncı indexte olduğuna bakma
value = numbers.indexOf(8);


//arrayin sonuna değer eklemek için -push, başına değer eklemek için -unshift;
numbers.push(14);
value = numbers;

numbers.unshift(333);
value = numbers;

//arayin sonundan değer çıkartma -pop;
numbers.pop();
value = numbers;



console.log(value);