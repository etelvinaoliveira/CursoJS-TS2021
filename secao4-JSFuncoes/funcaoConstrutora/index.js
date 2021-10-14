function Pessoa(nome, sobrenome) {
  const id = 12345;

  this.nome = nome;
  this.sobrenome = sobrenome;
}

const pessoa = new Pessoa("Brenda", "Machado");
console.log(pessoa);
