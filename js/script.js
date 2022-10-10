/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

//Dati
const row = document.querySelector(".row");


// 1 scrivere in console tutti i numeri da 0 a 100
for (let i = 0; i <= 100; i++) {
    //   - SE numero divisibile per 3 && numero divisibile per 5, stampo FizzBuzz
    //   - ALTRIMENTI SE numero divisibile per 3, stampo Fizz
    //   - ALTRIMENTI SE numero divisibile per 5, stampo Buzz

    let multi = "";

    if( i % 3 === 0 && i % 5 === 0) {
        multi = `FizzBuzz`;
        console.log(multi);
    } else if ( i % 3 === 0){ 
    multi = `Fizz`; 
    console.log(multi);
    } else if ( i % 5 === 0){ 
        multi = `Buzz`; 
        console.log(multi);
    } else {
        multi = `${i}`;
    }


    const cell = `<div class="cell"> ${multi}</div>`;
    row.innerHTML += cell;
}


