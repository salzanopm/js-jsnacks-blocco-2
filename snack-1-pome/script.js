// ESERCIZIO 1
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

// dichiaro variabile numero da inserire
const userNumber = parseInt(prompt(`Scrivi un unumero`))

// dichiaro variabile numero pari uguale numero utente
let number= userNumber;
if (number % 2 == 0) {                                          // se numero pari
    console.log(number,`Il numero è pari`);                     // stampo
} else {                                                        // altrimenti 
    number++;                                                   // incremento
    console.log(`Il numero è allora dispari aggiungo 1`, number); // stampa numero successivo
}