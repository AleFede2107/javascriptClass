/* function suma (numero1, numero2){
    return numero1 + numero2;
}; */

/* console.log(suma(3,4));
console.log(suma(17,21));
console.log(suma(32,24));
console.log(suma(20,10)); */

/* function multiplicar(numero1, numero2){
    console.log(numero1 * numero2)
};

multiplicar(70, 7); */

/* let edad = prompt('Ingrese su edad en anos');

function comprobacionEdad(edad){
    if(edad >= 18 && edad <= 60){
        console.log('Eres mayor de edad')
    }else if(edad > 60){
        console.log('Eres miembro de la tercera edad')
    }else{
        console.log('No eres mayor de edad')
    }
};
 */

//Crear una calculadora de descuento
//En una funcion van a recibir el precio y el descuento
//impriman el precio original, el precio con descuento y la cantidad descontada

/* let precioDescontado = 0;
let cantidadDescontada = 0;

function aplicarDescuento (precioOriginal, descuento) {

    cantidadDescontada = (descuento/100)*precioOriginal;

    precioDescontado = precioOriginal - cantidadDescontada;

    console.log(`El precio original es: ${precioOriginal}, el precio con descuento es: ${precioDescontado} y la cantidad ahorrada es: ${cantidadDescontada}`)
}

aplicarDescuento(150, 30); */

// Arrow functions - funciones de flecha

/* const gretting = () =>{
    console.log('Hola como has estado este dia?')
}

gretting(); */

// Funcion que me calcule el descuento dependiendo de una membresia
//si la membresia es gold 25% de descuento si es silver 15% de descuento y si es bajera 5% de descuento

const membresiaDescuento = (membresia) => {
  let membresiaComprobada = membresia.toUpperCase;

  switch (membresiaComprobada) {
    case "GOLD":
      console.log("Tiene un descuento de 25%");
      break;

    case "SILVER":
      console.log("Tiene un descuento de 15%");
      break;

    case "BRONZE":
      console.log("Tiene descuento de 5%");
      break;

    default:
      console.log("No se aplica descuento");
  }
};

membresiaDescuento();
