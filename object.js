const person = {
    name: 'Marcela Sarai',
    edad: 18,
    bootcamp: 'FSJ24B',
    casada: false,
    pasatiempos: ['Ver videos', 'Hacer pan']
}

console.log(person)
console.log(person.name)

//Deestructuring
const {name, edad, bootcamp: curso} = person
console.log(curso)