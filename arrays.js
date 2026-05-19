//ARREGLOS

//utilice let porque  va a cambiar el arreglo
let numeros = [10, 20, 30, 40, 50];

//1. agregamos el 40 al final
numeros.push(40);

//2. eliminamos el ultimo elemento y lo guardamos en una variable
const lastElement = numeros[3]; //const no va a cambiar
numeros.pop();
// console.log(lastElement)
// console.log(numeros)

//3. Comprueba si el array contiene el valor 20
if (numeros.includes(20)) {
    // console.log("El array contiene el valor 20")
} else {
    // console.log("El array no contiene un valor 20")
}

//4. Obtenemos la longitud final del array
console.log(numeros.length);


