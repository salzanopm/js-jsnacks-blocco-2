// ESERCIZIO 2
/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */

// array nomi
const nameArray = [`Paolo`, `Matteo`, `Luca`, `Marco`];
console.log(`Nomi`, nameArray);

// array cognomi
const surnameArray = [`Rossi`, `Bianchi`, `Verdi`, `Neri` ];
console.log(`Cognomi`, surnameArray);

// array nomi e cognomi casuali
const casualName = [];

for (let i = 0; i < nameArray.length; i++) {
    
    // funzione scelta random nome
    const thisName = nameArray[Math.floor(Math.random() * ((nameArray.length - 1 )+ 1) - 0)];
   
    // funzione scelta random nome
    const thisLastName = surnameArray[Math.floor(Math.random() * ((surnameArray.length -1 )+ 1) - 0)];
   // nome e cognome stampo
const guestName = thisName + ' ' + thisLastName;
casualName.push(guestName);
console.log(guestName)

}

