// ESERCIZIO 4
/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */

// nuovo array
const numberArray = [];

// inserisce numero fino a somma 50
let somma = 0;
while (somma < 50) {
    const userNumber = parseInt(prompt(`Scrivi un numero`));
    numberArray.push(userNumber);
    console.log(numberArray);
    somma += userNumber;
}

// Stampo 
console.log( `il totale è:`,somma);