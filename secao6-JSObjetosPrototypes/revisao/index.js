const pessoa = {
  nome: "Leticia",
  sobrenome: "Pinho",
};

// delete pessoa.nome;
pessoa.idade = 29;

pessoa.falarNome = () => {
  return `${this.nome} está falando seu nome`;
};

pessoa.getDataNascimento = function(){
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa) {
  console.log(chave);
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(pessoa.getDataNascimento());

const pessoa2 = new Object();
pessoa2.nome = "Sara";

const pessoa3 = (nome, sobrenome) => {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
};

function Pessoa(nome, sobrenome){
  (this.nome = nome), (this.sobrenome = sobrenome);
  Object.freeze(this);
};

const pessoa4 = new Pessoa("Sara", "Oliveira");
// Object.freeze(pessoa4);
// pessoa4 = "valor";
console.log(pessoa4);
