const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce(function (acumulador, valor, indice, array) {
  return (acumulador += valor);
}, 0);

const pares = numeros.reduce((acumulador, numeros) => {
  if (numeros % 2 == 0) {
    acumulador.push(numeros);
  }
  return acumulador;
}, []);

const dobro = numeros.reduce((acumulador, numeros) => {
  acumulador.push(numeros * 2);
  return acumulador;
}, []);

console.log(soma);
console.log(dobro);
console.log(pares);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduarda", idade: 55 },
  { nome: "Letícia", idade: 60 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, pessoas) => {
  if (pessoas.idade > acumulador.idade) {
    return pessoas;
  }
  return acumulador;
});

console.log(maisVelha);
