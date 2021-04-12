// Inserisco due parole in successione
let parola1 = prompt("inserisci una parola");
let parola2 = prompt("inserisci un'altra parola");

// Controllo che siamo parole e non frasi
if (parola1.includes(" ") || parola2.includes(" ")) {
    console.log("Solo parole, niente frasi")
}

//controllo che non siano numeri 

if (!Number.isNaN(parseInt(parola1)) || !Number.isNaN(parseInt(parola1))) {
    console.log("Solo parole, niente numeri")
}

// Stampo i risultati a seconda di che parola è più lunga, o se sono lunghe uguali
else if (parola1.length > parola2.length) {
    console.log(parola2)
    console.log(parola1)
}

else if (parola1.length < parola2.length) {
    console.log(parola1)
    console.log(parola2)
}

else { 
    console.log(parola1.charAt(0).toUpperCase() + parola1.slice(1) + " e " + parola2 + " hanno entrambe " + parola1.length + " caratteri.")
}