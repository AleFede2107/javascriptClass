//Ejercio 1
let edad = prompt('Ingrese su edad en numeros: ');

const mayoriaDeEdad = (edadIngresada) => {
    if (edadIngresada >= 18){
        return 'Es mayor de edad';
    }else{
        return 'No es mayor de edad';
    }
};

console.log(mayoriaDeEdad(edad));

//Ejercicio 2 
let examenDecimal = 0;
let tareasDecimal = 0;
let asistenciaDecimal = 0;
let investigacionDecimal = 0;
let notaFinal = 0;

const calcularNotaFinal = (nombre, carnet, examen, tareas, asistencia, investigacion) => {
    examenDecimal = examen*0.2;
    tareasDecimal = tareas*0.4;
    asistenciaDecimal = asistencia*0.1;
    investigacionDecimal = investigacion*0.3;

    notaFinal = examenDecimal + tareasDecimal + asistenciaDecimal + investigacionDecimal;

    console.log(`La nota final del alumno ${nombre} con el carnet ${carnet} es de ${notaFinal}`)
};

calcularNotaFinal(Federico, 12345, 10, 10, 10, 10)

//Ejercicio 3

const calcAumentoSalarial = (nombre, salario, categoria) => {
    
    let aumentoDecimal = 0;
    let categoriaAut = categoria.toUpperCase;

    switch(categoriaAut){
        case 'A':
            aumentoDecimal = 0.15;
            break
        case 'B':
            aumentoDecimal = 0.3;
            break
        case 'C':
            aumentoDecimal = 0.1;
            break
        case 'D':
            aumentoDecimal = 0.2;
            break
        default :
            alert('Este Valor es Invalido intente de nuevo');
    }

    let cantidadAumento = salario*aumentoDecimal;
    let salarioAumentado = salario + cantidadAumento;

    console.log(`El empleado ${nombre} con salario ${salario}\n recibira un aumento de ${cantidadAumento} \n 
        recibiendo un total de ${salarioAumentado}`);
}

calcAumentoSalarial(Federico, 1000, B);

//Ejercicio 4

let primerValor = prompt('Ingrese el primer valor a comparar: ');
let segundoValor = prompt('Ingrese el segundo valor a comparar: ');

const comparadorValores = (valor1, valor2) => {
    if (valor1 > valor2) {
        return valor1;
    }else{
        return valor2;
    }
}

console.log(comparadorValores(primerValor, segundoValor));

//Ejercicio 5

let tipoDeAuto = prompt('Ingrese el tipo de FORD que va a comprar: ');

const descuentoAuto = (ford) => {

    let tipoFord = ford.toUpperCase;

    switch(tipoFord){
        case 'FIESTA':
            alert('EL FORD FIESTA tiene un descuento de 5%');
            break
        case 'FOCUS':
            alert('EL FORD FOCUS tiene un descuento de 10%');
            break
        case 'ESCAPE':
            alert('EL FORD ESCAPE tiene un descuento de 20%');
            break
        default:
            alert('Por favor ingrese un modelo valido');
    }
}

descuentoAuto(tipoDeAuto);

//Ejercicio 6

let destino = prompt('Ingrese el destino deseado: ')

const descuentoViaje = (origen, ciudadDestino) => {

    let destinoAut = ciudadDestino.toUpperCase;
    let descuento = '';

    switch(destinoAut){
        case 'LA COSTA DEL SOL':
            descuento = '5%';
            break
        case 'PANCHIMALCO':
            descuento = '10%';
            break
        case 'PUERTO EL TRIUNFO':
            descuento = '15%';
            break
        default: 
            console.log('El destino digitado no esta disponible')
    }

    console.log(`El viaje con origen en ${origen} y destino en ${ciudadDestino} recibe un ${descuento} de descuento`);
}

descuentoViaje('Palma', destino);

//Ejercicio 7

let negativeTally = 0;
let positiveTally = 0;
let fifteenTally = 0;
let evenTally = 0;

const tenValues = () => {

    let input = prompt('ingrese 10 valores separados por ",": ');

    const valores = input.split(",");

    const tallyValues = valores.forEach(number =>{
        let num = Number(number);

        if(num < 0){
            negativeTally = negativeTally + 1;
        }

        if(num > 0){
            positiveTally = positiveTally + 1;
        }

        if(num % 15 === 0){
            fifteenTally = fifteenTally + 1;
        }

        if(num % 2 === 0){
            evenTally = evenTally + 1;
        }
    })

    console.log(`La cantidad de valores negativos ingresados es de: ${negativeTally} \n 
        la cantidad de valores positivos es de: ${positiveTally} \n
        la cantidad de multiplos de 15 es de: ${fifteenTally}\n
        la cantidad de numeros pares es de: ${evenTally}`);
};

tenValues();

//Ejercicio 8

let number = prompt('Ingrese un numero');

const tablaDeNumero = (num) => {
    let numero = Number(num);
    let tabla = 0;

    for(let i = 0; i < 10; i++){
        tabla = numero * (i + 1);
        console.log(`${i} X ${numero} = ${tabla}`);
    }
}

tablaDeNumero(number);

//Ejercicio 9

let degreeCels = prompt('Ingresar grados Celsius: ');

const celsiusToFahrenheit = (cels) => {
    celsius = Number(cels);
    return (celsius * 9/5) + 32;
}

const comprobacionTemperatura = (degree) => {
    let fahrenheit = celsiusToFahrenheit(degree);

    if((fahrenheit >= 14) && (fahrenheit < 32)){
        console.log('Temperatura Baja');
    }else if((fahrenheit >= 32) && (fahrenheit < 68)){
        console.log('Temperatura Adecuada');
    }else if((fahrenheit >= 68) && (fahrenheit <= 96)){
        console.log('Temperatura Alta');
    }else {
        console.log('Temperatura desconocida');
    }
}

comprobacionTemperatura(degreeCels);

//Ejercicio 10

