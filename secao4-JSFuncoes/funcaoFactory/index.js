function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      return `${nome} está ${assunto}`;
    },

    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const pessoa = criaPessoa("Luiz", "Otávio", 1.8, 42);
pessoa.nomeCompleto = "Maria Oliveira Silva";
console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa.imc)
console.log(pessoa.fala('falando sobre JS'))
