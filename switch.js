/* let paymentMethod = 'cash'

switch(paymentMethod){
    case 'cash':
        console.log('You pay with cash')
        break;
    
    case 'credit card':
        console.log('You pay with credit card')
        break;
    
    case 'cacao' :
        console.log('You serious?')
        break;

    default:
        console.log('Invalid payment method')
} */

// Desde el teclado van a pedir una serie de cursos:
// HTML CSS Javascript
// imprimir el curso seleccionado y validar la entrada de datos

let entryValue = prompt('Seleccione un curso:');

let evaluationValue = entryValue.toUpperCase;

switch(entryValue){
    case 'HTML':
        console.log('seleccionaste HTML')
        break
    case 'CSS':
        console.log('seleccionaste CSS')
        break
    case 'JAVASCRIPT':
        console.log('seleccionaste JAVASCRIPT')
        break
    default :
        console.log('Este no es uno de los cursos disponibles')
}