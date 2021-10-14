const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobroNumeros = numeros.map((numeros) => numeros * 2);

console.log(dobroNumeros);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduarda", idade: 55 },
  { nome: "Letícia", idade: 60 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomes = pessoas.map((pessoas) => pessoas.nome);
const idade = pessoas.map((pessoas) => ({ idade: pessoas.idade }));

const id = pessoas.map((pessoas, indice) => {
  const newPessoa = { ...pessoas };
  newPessoa.id = indice;
  return newPessoa;
});

console.log(nomes);
console.log(idade);
console.log(id);