const produto = {
  nome: "Caneca",
  preco: 1.8,
};

const caneca = Object.assign({}, produto);
const outraCoisa = produto;
const outraCoisa2 = { ...produto };
const lapis = { nome: produto.nome };

outraCoisa.nome = "Lápis";

console.log(produto);
console.log(outraCoisa);
console.log(Object.getOwnPropertyDescriptor(produto, "preco"));

/*
for (let entry of Object.entries(produto)) {
    console.log(entry)
}
*/

for (let [chave, valor] of Object.entries(produto)) {
  console.log([chave, valor]);
}
