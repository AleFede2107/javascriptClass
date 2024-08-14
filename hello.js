//Si el numero secreto es igual al numero que ingresaste ganaste
//si el numero secreto es mayor al que ingresaste
//si el numero secreto es menor al que ingresaste

let secretNumber = Math.floor(Math.random()*10 + 1)

let guessedNumber = prompt('Adivina el numero secreto entre (0 y 10)');
console.log(guessedNumber);

if(secretNumber == guessedNumber){
    console.log('You Won')
}else if(secretNumber < guessedNumber){
    console.log('Your guess is higher')
}else {
    console.log('Your guess is lower')
};