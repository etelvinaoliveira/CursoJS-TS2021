const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
function callbackFilter(valor,indice,array){
    if(valor>10) return true
}
*/

function callbackFilter(valor) {
  return valor > 10;
}

const numerosFilter = numeros.filter(callbackFilter);
const numerosMaioresQueDez = numeros.filter((valor) => valor > 10);

console.log(numerosMaioresQueDez);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduarda", idade: 55 },
  { nome: "Letícia", idade: 60 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const caracteresNome = pessoas.filter((pessoas) => pessoas.nome.length >= 5);
const idadeMaiorCinquenta = pessoas.filter((pessoas) => pessoas.idade > 50);
const nomeTerminadoEmA = pessoas.filter((pessoas) => pessoas.nome.endsWith("a"));

console.log(caracteresNome);
console.log(idadeMaiorCinquenta);
console.log(nomeTerminadoEmA);
