//DEQUE

//1. Crea un dequeue vacio
let deque = [];
// console.log(deque);

//2. Añade al final del 10 y al inicio 5
deque.push(10); //agregar al final
deque.unshift(5); //agregar al inicio
// console.log(deque);


//3. Elimina el primer elemento y guardalo
const firstElement = deque.shift()
console.log(firstElement);


//4. Elimina el ultimo elemento y guardalo
const lastElement = deque.pop();
console.log(lastElement);

//5. Comprueba la longitud restante
console.log(deque.length);