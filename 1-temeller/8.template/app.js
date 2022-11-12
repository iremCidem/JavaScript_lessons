const name = "Irem";
const occupation = "Software engineer";
const age = 24;

//bunları düzgün bir biçimde yazdırmak için kullandığımız şey template literal. altgr ve noktalıvirgül

// const inf = `isim:${name}\nMeslek:${occupation}\nYaş:${age}`;

//liste oluşturalım.
const inf = 
`<ul> 
<li>${name}</li>
<li>${occupation}</li>
<li>${age}</li>
</ul> `;

document.body.innerHTML = inf;