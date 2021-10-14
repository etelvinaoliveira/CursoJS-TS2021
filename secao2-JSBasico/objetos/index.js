const pessoa = {
  nome: "Milena",
  sobrenome: "Aguiar",
  idade: "27",
};
console.log(pessoa.nome);

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

/*
const pessoa2 = {
  nome,
  sobrenome,
  idade,
  fala() {
    console.log(`${this.nome}`);
  },
};
*/
