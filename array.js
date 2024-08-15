/* const names = Array('Gisela', 'Marcela', 'Ever', 'Henry');
const fruits = ['Mango', 'Limon', 'Mandarina']; */

/* const fruits = ['🍓', '🍌', '🥝'];

console.log(fruits); */

/* console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); */

//Mutabilidad

/* fruits[1] = '🍑';
console.log('MUTACION ', fruits); */

//Inmutabilidad
/* const newFruits = fruits.concat('🍐', '🍉');

console.log(newFruits); */

//Agregar un elemento al final
/* newFruits.push('🎃');
console.log(newFruits); */

//Eliminar el elemento final
/* newFruits.pop();
console.log(newFruits); */

//Agregar un elemento al inicio
/* newFruits.unshift('🍇');
console.log(newFruits); */

//Eliminar un elemento al inicio
/* newFruits.shift();
console.log(newFruits); */

/* const numbers = [2, 4, 6, 8, 10];

const newNumbers = numbers.map(number => {
    console.log(number * number)
})

console.log(newNumbers); */

const names = ['Marcela', 'Marlon', 'Katy'];
const iteratedNames = names.forEach(name => {
    console.log(name)
})

console.log(`Arreglo original: ${names}`);
console.log(`Arreglo iterado: ${iteratedNames}`);