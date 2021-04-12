var totalNumber = 0;

for (i = 0; i < 10; i++) {
    userNumber = parseInt(prompt("Inserisci un numero"))

    if (Number.isNaN(userNumber)) {
        alert1
        ("Uno o più valori inseriti risultano errati. Inserisci solo numeri perfavore.")
        i--
    }

    else {
        totalNumber += userNumber
    }
}



console.log(totalNumber)
