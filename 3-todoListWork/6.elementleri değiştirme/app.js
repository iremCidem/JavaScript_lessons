//replace ile card body içindeki h5in yerine yeni oluşturduğumuz h3ü yazacağız.

const cardbody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "yeni todolar"; //text content kullandık çünkü içinde tek bir yazı bulunacak.

//eski element
const oldElement = document.querySelector("#tasks-title");
cardbody.replaceChild(newElement, oldElement);
