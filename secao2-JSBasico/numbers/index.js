let numero1 = 1.8;
let numero2 = 2.5;

console.log(numero1.toString());
console.log(numero1.toString(2));
console.log(Math.floor(numero1));
console.log(numero1.toFixed(2));
console.log(Number.isInteger(numero2));

let temp = numero2 * "Olá";
console.log(Number.isNaN(temp));

numero1 = 0.1 + 0.7;
// numero1=parseFloat(numero1.toFixed(2))
numero1 = Number(numero1.toFixed(2));

console.log(Number.isInteger(numero1));

let numero3 = 0.7;
let numero4 = 0.1;

numero3 = (numero3 * 100 + numero4 * 100) / 100;

console.log(numero3);

let a = "1";
a = Number(a);
console.log(Number.isInteger(a));
