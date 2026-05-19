//QUEUES (COLAS)
//1. Crea una cola vacia
let queue = [];

//2. Encola "x", "y", "z"
queue.push("cliente 1");
queue.push("cliente 2");
queue.push("cliente 3");
console.log(queue);

//3. Desencola un elemento y guardalo
const deqeued = queue.shift(); //shift es para sacar
console.log(queue);
console.log(deqeued);

//4. Obten el elemento al frente sin retirarlo
const front = queue[0];
console.log(front)


//5. Comprueba si la cola esta vacia
const isEmptyQ = queue.length === 0;
console.log(isEmptyQ)