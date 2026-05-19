//Listas enlazadas
//JAVASCRIPT POR DEFECTO NO TRAE LINKEDLIST

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) curr = curr.next;
            curr.next = node;
        }
    }

    remove(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let curr = this.head;
        while (curr.next && curr.next.value !== value) curr = curr.next;
        if (curr.next) curr.next = curr.next.next;
    }

    insertAfter(target, value) {
        let curr = this.head;
        while (curr && curr.value !== target) curr = curr.next;
        if (curr) {
            const node = new Node(value);
            node.next = curr.next;
            curr.next = node;
        }
    }

    traverse() {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

//1. Crea una linkedList y añade: 'A', 'B' y 'C'
let lista = new LinkedList();
[lista.add("A"), lista.add("B"), lista.add("C")];
// console.log(lista);

//2. Elimina el nodo con el valor "B"
lista.remove("B");
// console.log(lista)

//3. Recorre e imprime los valores restantes
// lista.traverse();
// console.log(lista);

//4. Inserta un nuevo nodo con el valor de "X" justo despues de "A"
lista.insertAfter("A", "X");
// console.log(lista);

//5. Elimina el nodo con el valor "C"
lista.remove("C");
// console.log(lista);

//6.Recorre e imprime los valores finales
lista.traverse();