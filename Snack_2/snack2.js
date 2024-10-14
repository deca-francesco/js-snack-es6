/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
    { 
        nome: "Juventus",
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    { 
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    { 
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    }
  ];
// console.log(squadre);

function randomScore() {
    return Math.ceil(Math.random()* 50) ;
};
// console.log(randomScore());

// sostituisco i valori 
for (const key in squadre) {
    const squadra = squadre[key];
    // console.log(squadra);
    squadra.puntiFatti = randomScore();
    squadra.falliSubiti = randomScore();
}
console.log(squadre);

const squadra_falli = [];
// pusho le proprietà  e i valori nel nuovo array
for (let i = 0; i < squadre.length; i++) {
    const squadra = squadre[i];
    squadra_falli.push({
        nome: squadra.nome,
        falliSubiti: squadra.falliSubiti
    })
}
console.log(squadra_falli);


////////////////////////////////////////////////////////////////////////////////////////////////////
// CORREZIONE

// il primo ciclo è uguale al secondo. si può fare tutto nel secondo
const squadra_falli2 = [];

for (let i = 0; i < squadre.length; i++) {
    const squadra = squadre[i];
    squadra.puntiFatti = randomScore();
    squadra.falliSubiti = randomScore();

    squadra_falli2.push({
        nome: squadra.nome,
        falliSubiti: squadra.falliSubiti
    })
}
console.log(squadra_falli2);
