// TALLER INDIVIDUAL JAVASCRIPT

// VARIABLES
// 1. Crea un programa que solicite al usuario dos números y muestre la suma de ambos.

let number1 = 3;
let number2 = 6;
console.log(`La suma de los dos numeros es: ${number1 + number2}`);

// 2.Escribe un programa que calcule el área de un paralelogramo cuando la base sea 10 y la altura 7.

let width = 10;
let heigth = 7;
console.log(`El área del paralelogramo es: ${width*heigth}`);

// CONDICIONALES
//1.	Escribe un programa que solicite al usuario su edad y muestre un mensaje indicando si es mayor de edad o no.

let edad = 18;
if (edad > 17) {
    console.log(`su edad es: ${edad}, Usted es mayor de edad`);
} else {
    console.log(`Su edad es: ${edad}, Usted no es mayor de edad`);
}

//2.	Crea un programa que pida al usuario un número y muestre un mensaje indicando si es positivo, negativo o cero.

let number = 1;
if (number < 0) {
    console.log(`El número ingresado: ${number}, es negativo`);
} else if (number === 0) {
    console.log(`El número ingresado: ${number}, es cero`);
} else if (number > 0) {
    console.log(`El número ingresado: ${number}, es positivo`);   
} else {
    console.log("El dato ingresado no es el número");
}

// ARRAYS
//1.	Crea un programa que declare un array con varios nombres y luego los muestre uno por uno en la consola.

const names= ["Kevin", "Andrea", "Camila", "Juana", "maria", "daniela"];
names.forEach(element => {console.log(element)});
// 2.	Escribe un programa que pida al usuario cinco 
// números, los guarde en un array y luego muestre el número 
// mayor.

const numbers = [100, 50, 3, 60, 5];
let max = 0;
let min = 0;
for (let i = 0; i < numbers.length-1; i++) {
    if (numbers[i] >= max) {
        max = numbers[i];
    } else{
        min = numbers[i];
    }
}
console.log(`El número máximo del vector es: ${max}`);

//OBJETOS
//1.	Crea un objeto llamado "persona" con propiedades como nombre, edad y profesión. Luego, muestra cada una de las propiedades en la consola.

const persona = { 
    nombre: "Giselle",
    edad: 34,
    profesion: "Ingeniería biomédica"
};
console.log(`${persona.nombre} tiene ${persona.edad} años y su profesión es: ${persona.profesion}`);

//2.	Escribe un programa que simule un carrito de compras. Crea un objeto "carrito" que tenga propiedades como productos y total.
// Agrega varios productos al carrito y muestra el total.

const carrito = 
[{
    producto: "tomate",
    precio: 1500,
},{

    producto: "cebolla",
    precio: 1000,
},{

    producto: "aguacate",
    precio: 4000,
}, {
    producto: "pepino",
    precio: 1200,
},{

    producto: "arbeja",
    precio: 2300,
},{

    producto: "papa",
    precio: 800,
}];
let suma = 0;
for (let i = 0; i < carrito.length; i++) {
    suma =carrito[i].precio + suma; 
}
console.log(`La suma total de los productos comprados es $: ${suma} pesos colombianos`);

//CICLOS:
//1.	Crea un programa que muestre en la consola los números del 1 al 10 utilizando un bucle for.

for (let index = 1; index < 11; index++) {
    console.log(index); 
}

//2.	Escribe un programa que solicite al usuario un número y luego muestre en la consola todos los números pares desde 1 hasta ese número.

let numberComplete = 11;
for (let index = 0; index <= numberComplete; index++) {
    let par = index%2;
    if (par === 0) {
        console.log(index);
    }
}

//ARRAY DE OBJETOS:
//1.	Crea un array de objetos, donde cada objeto represente a una persona con propiedades como nombre, edad y profesión.
//  Muestra en la consola la profesión de cada persona en el array.

const datosPersonales= [{
    nombre: "Camila",
    edad: 20,
    profesion: "programador"
}, {
    nombre: "juana",
    edad: 11,
    profesion: "estudiante"
}, {
    nombre: "maria",
    edad: 40,
    profesion: "ingeniera"
}, {
    nombre: "dany",
    edad: 40,
    profesion: "profesor"
},]

for (let i = 0; i < datosPersonales.length; i++) {
    console.log(`su nombre es: ${datosPersonales[i].nombre}, tiene: ${datosPersonales[i].edad} años y su profesión es: ${datosPersonales[i].profesion}`);  
 }


//Variables, condicionales, ciclos, arrays, objetos, operadores aritméticos, relacionales y lógicos:
//1.	Crea un programa que solicite al usuario un número y luego muestre en la consola todos los números pares menores o iguales a ese número.

let numberComplete1 = 50;
for (let index = numberComplete1; index >= 0; index--) {
    let par = index%2;
    if (par === 0) {
        console.log(index);
    }
}

//2.	Escribe un programa que simule un juego de adivinanzas. Genera un número aleatorio entre 1 y 10 y pide al usuario que lo adivine. 
//Muestra un mensaje indicando si el usuario acertó o no.

let numberUser = 10;
let numberRandom = Math.floor(Math.random()*(numberUser+1));
console.log(`El número ingresado por usted es: ${numberUser} y el número aleatorio es: ${numberRandom}`);
if (numberRandom == numberUser) {
    console.log("Usted a adivinado el número");
} else {
    console.log("Usted no adivinó el número");
}