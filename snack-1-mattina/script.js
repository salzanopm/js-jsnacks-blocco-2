// ESERCIZIO 4
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)

// FOR
// dichiaro variabile somma
let somma = 0;

// Chiedo per 5 volte un numero all'utente
for (let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt(`Inserisci un numero`));
    console.log(userNumber);
// Sommo i numeri inseriti
    somma += userNumber;
}
// Stampo 
console.log(`Totale`, somma);



// WHILE 
// dichiaro variabile
let i = 0;
while (i < 5) {
    const userNumber = parseInt(prompt(`Inserisci un numero`))
    console.log(userNumber);
    // incremento
    i++;
    // sommo
    somma += userNumber;
}

// Stampo 
console.log(`Totale:`, somma);