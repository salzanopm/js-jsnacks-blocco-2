// ESERCIZIO 3
/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
 */

// array numeri interi
const numbers = [11, 22, 33, 44, 55, 66];

// dichiaro variabile somma
let somma = 0;
for (let i = 0; i < numbers.length; i++) {
    let thisNumber = numbers[i];
    // numeri dispari
    if (i % 2 !== 0) {
        console.log(`posizione`, i);
        // sommo
        somma += thisNumber;
        console.log(thisNumber);
    }
}

// Stampo 
console.log(`Totale`, somma);