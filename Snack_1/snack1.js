/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

console.log("js linked");

// creo l'array di bici
const bici_array = [
    {
        nome: "Fulmine",
        peso: 2.5
    },
    {
        nome: "Saetta",
        peso: 2.7
    },
    {
        nome: "Lampo",
        peso: 2.8
    }
];

console.log(bici_array);

// prendo il div dalla pagina
const biciEl = document.getElementById("bici");

/*
// prendo i pesi col ciclo for in
const pesi_array = [];
let peso_singolo;
for (const peso in bici_array) {
    peso_singolo = bici_array[peso];
    pesi_array.push(peso_singolo);
    console.log(peso_singolo);
}
console.log(pesi_array);
*/

// prendo il peso minore
const peso_minore = Math.min(bici_array[0].peso, bici_array[1].peso, bici_array[2].peso);
console.log(peso_minore);

// prendo l'oggetto col peso minore
let leggera;

for (let i = 0; i < bici_array.length; i++) {
    if (peso_minore == bici_array[i].peso) {
        leggera = bici_array[i];
    }
}
console.log(leggera);

// metto in pagina
biciEl.innerHTML = (`<h3>La bici più leggera è: ${leggera.nome} e pesa ${leggera.peso} kg</h3>`);
