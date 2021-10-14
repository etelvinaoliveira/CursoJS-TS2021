const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

// const pessoaPrototype = { ...falar };
const pessoaPrototype = Object.assign({}, falar);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const pessoa = criaPessoa('Luiz','Otávio')
console.log(pessoa)
