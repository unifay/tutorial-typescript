
//Array
console.log("-------ARRAY------");
let listAny: number[] = [1, 2, 3]; // sin tipo definido seran ANY

let listaArray: Array<number> = [1 ,2 ,3]; // definiendo el tipo Array 

//Tuplas
console.log("-------TUPLAS------");

let x: [string, number];

x = ["unapalabra", 7];// inicializado por orden string-number

console.log(x[0]); // obteniendo el valor del primero elemento
console.log(x[1]); // obteniendo el valor del segundo elemento


let y: [number, string];

y = [8 , "otrapalabra"];// inicializado por orden numero-string 
console.log(y[0]); // obteniendo el valor del primero elemento
console.log(y[1]); // obteniendo el valor del segundo elemento

//Enum
console.log("-------ENUM------");

enum Cardinales {

    NORTE = 1,
    SUR = "NaN",
    ESTE = "asdf",
    OESTE = "1 << 1",
    OESTE2 = "1 << 1"
}
enum Colores {Amarillo, Azul, Rojo};
let c: Colores = Colores.Azul;// 1
var a = Cardinales.NORTE;

console.log(Cardinales.ESTE);