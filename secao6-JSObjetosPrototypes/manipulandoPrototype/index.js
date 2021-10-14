/*
const objA = {
  chaveA: "A",
};

console.log((objA.__proto__ = Object.prototype));

const objB = {
  chaveB: "B",
  //__proto__ = objA
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);
*/

function Produto(nome, preco) {
  (this.nome = nome), (this.preco = preco);
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const produto = new Produto("Camiseta", 50);

const produto2 = {
  nome: "Caneca",
  preco: 15,
};

Object.setPrototypeOf(produto2, Produto.prototype);

produto.desconto(10);
produto2.desconto(10);

console.log(produto);
console.log(produto2);

const pessoa3 = Object.create(Produto.prototype, {
  tamanho: {
    writable: true,
  },
});

pessoa3.preco = 113;
