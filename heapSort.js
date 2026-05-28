import MiniHeap from "./Recursos/heap.js";

//Ejercicio de Min-Heap usando clase MinHeap

//1. Crea un MinHeap usando la clase proporcionada
let heap = new MiniHeap();

//2. Inserta los valores: 5, 3, 8, 1 (en ese orden) usando el metodo insert
heap.insert(5);
heap.insert(3);
heap.insert(8);
heap.insert(1);
console.log(heap.heap);

//3. Extra la raiz (minimo) y guardala en la variable 'root'
const root = heap.extractMin();
console.log("Modo root: ", root);

//4. Muestra el Heap resultante y el valor extraido
console.log("Heap completo: ", heap.heap);