//console.log(this.document); //bu şekilde window içindeki document içinde html etiketlerimizi görebiliyoruz.
//console.log(document);
let value;

// value = document;
value = document.all;
value = document.body;

// tüm elementlerin üzerinde tek tek gezinelim.
//const elements = document;
// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }
value = document.scripts;
value = document.links;
value = document.links[3].getAttribute("class");
value = document.links[4].className;
value = document.forms;
value = document.forms[0].name;

v;
console.log(value);
