// Creo un FOR per andare a creare un ciclo di incremento unitario da 1 a 100
for (i = 1; i <= 100; i++) {
    let number = i
    // Creo un IF per andare a cercare i numeri divisibili per 3 per andare a sostituire il numero con "Fizz"
    if (i % 3 == 0) {
        i = 'Fizz'
    }
    // Creo un IF per andare a cercare i numeri divisibili per 5 per andare a sostituire il numero con "Buzz"
    else if (i % 5 == 0) {
        i = 'Buzz'
    }
    
}
