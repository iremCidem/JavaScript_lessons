const person = {
  //obje, name:property
  name: "irem",
  age: 24,
  salary: 3000,
};
const langs = ["PYTHON", "JAVASCRIPT", "C++"]; //array
const name = "irem"; //string

//for in ile obje içinde gezinme
for (let prop in person) {
  console.log(prop, person[prop]);
}
//for in ile array üzerinde gezinme
for (let index in langs) {
  console.log(index, langs[index]);
}
//for in ile string üzerinde gezinme
for (let index in name) {
  console.log(index, name[index]);
}
//for off döngüleriyle objeler üzerinde gezinemiyoruz
//for off ile arraylar üzerinde gezinme
for (let value of langs) {
  console.log(value); //indexleri değil direkt değerleri aldık.
}
//string üzerinde gezinme
for (let character of name) {
  console.log(character);
}
