let a = "A";
let b = "B";
let c = "C";

const numeros = [1, 2, 3];
[a, b, c] = numeros;

const [primeiroNumero, segundoNumero, ...resto] = numeros;
const [um, , tres] = numeros;

console.log(primeiroNumero, segundoNumero, resto);
console.log(um, tres);

const numeros2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numeros2[2][6]);

const [, [, , seis]] = numeros2;
console.log(seis);
