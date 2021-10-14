const produto = (nome, preco, estoque) => {
  /*
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
  */

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: true,
    configurable: false,
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: estoque,
      writable: true,
      configurable: false,
    },
    preco: {
      enumerable: true,
      value: estoque,
      writable: true,
      configurable: false,
    },
  });
};

const produto1 = new Produto("Camiseta", 20, 3);

console.log(produto1.nome);
console.log(Object.keys);
