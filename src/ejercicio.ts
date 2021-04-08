import {Lifo} from "./lifo"

let pilalifo = new Lifo([1,2,3,4,5,"hola"]);
console.log("-------Imprimo la pila-------");
console.log(pilalifo.print());
console.log("-------Hago un push con 6-------");
pilalifo.push(6);
console.log(pilalifo.print());
console.log("-------Hago un pop-------");
let ultimoitem = pilalifo.pop();
console.log(ultimoitem);
console.log(pilalifo.print());
console.log("-------Hago un pseek-------");
console.log(pilalifo.pseek());
console.log(pilalifo.print());
console.log("-------Size de la pila-------");
console.log(pilalifo.size());