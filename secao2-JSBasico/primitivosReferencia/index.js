let numero1 = 1;
let numero2 = numero1;
console.log(numero1, numero2);

numero1 = 2;
console.log(numero1, numero2);

let numeros = [1, 2, 3];
let numeros2 = numeros;
let numeros3 = [...numeros];
console.log(numeros, numeros2);

numeros.push(4);

console.log(numeros, numeros2);
console.log(numeros3);

const pessoa = {
  nome: "Julia",
  sobrenome: "Paranhos",
};

const pessoa2 = pessoa;
const pessoa3 = { ...pessoa, idade: 18 };

pessoa.nome = "João";

console.log(pessoa2);
