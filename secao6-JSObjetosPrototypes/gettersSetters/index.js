function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    // value: estoque,
    // writable: true,
    configurable: false,

    get: () => {
      return estoque;
    },

    set: (valor) => {
      if (typeof valor !== "number") {
        throw new TypeError("Mensagem");
      }

      estoque = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },

    set nome(valor) {
      nome = valor;
    },
  };
}

const produto = new Produto("Camiseta", 20, 3);
console.log(produto.estoque);
