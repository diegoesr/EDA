export default class MiniHeap {
    constructor() {
        this.heap = [];
    }

    //Inserta un valor y lo <percola> hacia arriba hasta su sitio
    insert(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[p] <= this.heap[i]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    //Extrae la raiz (minimo), reequilibra
    extractMin() {
        if (!this.heap.length) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = last;
            this._heapifyDown(0);
        }
        return min;
    }

    //Mira el minimo sin extraerlo
    peek() {
        return this.heap[0] ?? null;
    }

    size() {
        return this.heap.length;
    }

    buildHeap(arr) {
        this.heap = arr.slice();
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this._heapifyDown(i);
        }
    }

    _heapifyDown(i) {
        const n = this.heap.length;
        while (true) {
            const l = 2 * i + 1;
            const r = 2 * i + 2;
            let smallest = i;
            if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
            if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}