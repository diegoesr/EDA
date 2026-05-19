//Stacks = pilas

//1. Crea una pila vacia
let stack = [];


//2. Apila los elementos 1,2,3
stack.push(1, 2, 3);
// console.log(stack)

//3. Desapila un elemento y guardalo
const elementoEliminado = stack.pop();
console.log(elementoEliminado);
console.log(stack)

//4. Obten el elemento de arriba sin retirarlo
const peek = stack[stack.length - 1];
console.log(peek);

//5. Comprueba si la pila esta vacia
const isEmpty = stack.length === 0;
console.log(isEmpty);

