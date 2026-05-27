// HASHMAPS

//1. Crea un objeto Map vacio
let mapa = new Map();

//2. Inserta las parejas clave - valor ("a" 1 ), ("b" 2), ("c" 3)
mapa.set("a", 1);
mapa.set("b", 2);
mapa.set("c", 3);
// console.log(mapa);


//3. Obten el valor asociado a la clave "b"
let valueB = mapa.get("b");
console.log(valueB);

//4. Comprueba si existe la clave "d"
let hasD = mapa.has("d");
console.log(hasD);

//5. Elimina la clave "a"
mapa.delete("a");
console.log(mapa);

//6. Obten el tamaño del Map
console.log(mapa.size);