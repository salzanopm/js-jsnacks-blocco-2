// ESERCIZIO 2
/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */

// array nomi
const nameArray = [`Luca`, `Marco`, `Giovanni`, `Matteo`, `Paolo`, `Pietro`];
console.log(`Nomi`, nameArray);

// array cognomi
const surnameArray = [`Rossi`, `Verdi`, `Bianchi`,];
console.log(`Cognomi`, surnameArray);

// array nomi e cognomi casuali
const casualName = [];

// dichiaro variabile nome random
let nameRandom;
for (let i = 0; i < nameArray.length; i++) {
    console.log(nameArray);
    let thisName = nameArray[i];
    console.log(thisName);
    // funzione scelta random nome
    thisName = nameArray[Math.floor(Math.random() * ((nameArray.length - 1) + 1) - 0)];
    console.log(thisName);
    nameRandom = thisName;
}

// dichiaro variabile cognome random
let randomLastName;
for (let i = 0; i < surnameArray.length; i++) {
    console.log(surnameArray);
    let thisLastName = surnameArray[i];
    console.log(thisLastName);
    // funzione scelta random nome
    thisLastName = surnameArray[Math.floor(Math.random() * ((surnameArray.length -1) + 1) - 0)];
    console.log(thisLastName);
    randomLastName = thisLastName;
}

// nome e cognome stampo
const guestName = nameRandom + ' ' + randomLastName;
casualName.push(guestName);
console.log(`Invitati`, casualName);