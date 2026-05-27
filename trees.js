//Arbol binario
//Se proporciona la clase node

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


//1. Crea un nodo raiz con valor 1
let root = new Node(1);

//2. Inserta un hijo izquierdo con valor 2 y un hijo derecho con valor 3

root.left = new Node(2);
root.right = new Node(3);

//3. Inserta un hijo izquierdo al nodo 2 con valor 4

root.left.left = new Node(4);

//4. Inserta un hijo derecho al nodo 3 con valor 5

root.right.right = new Node(5);

//5. Realiza y muestra:
//  - Recorrido pre-order (Nodo -> izquierda -> derecha)
function preOrder(node) {
    if (!node) return;
    console.log(node.val);
    preOrder(node.left);
    preOrder(node.right);
}

//  - Recorrido in-order (Izquierda -> Nodo -> derecha)
function inOrder(node) {
    if (!node) return; //revisa si tiene un nodo
    inOrder(node.left);
    console.log(node.val);
    inOrder(node.right);
}

//  - Recorrido post-order (Izquierda -> Derecha -> Nodo)
function postOrder(node) {
    if (!node) return; //revisa si tiene un nodo
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.val);
}



//Mostrar recorridos
console.log("1. Pre-order");
console.log("-----------------------");
preOrder(root);

console.log("2. In-order");
console.log("-----------------------");
inOrder(root);

console.log("3. Post-order");
console.log("-----------------------");
postOrder(root);