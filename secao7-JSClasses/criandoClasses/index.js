class Pessoa {
  constructor(nome, sobrenome) {
    (this.nome = nome), (this.sobrenome = sobrenome);
  }
  falar() {
    console.log(`${this.nome} falando`);
  }
}

function Pessoa2(nome, sobrenome) {
  (this.nome = nome), (this.sobrenome = sobrenome);
}

Pessoa2.prototype.falar = () => {
  console.log(`${this.nome} falando`);
};

const p1 = new Pessoa("Paulo", "Viana");
console.log(p1.falar());
