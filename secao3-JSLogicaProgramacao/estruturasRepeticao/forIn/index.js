const frutas = ["Pera", "Maçã", "Uva"];

for (let fruta in frutas) {
  console.log(fruta);
}

const pessoas = {
  nome: "Luiz",
  sobrenome: "Otavio",
  idade: "18",
};

console.log(pessoas["nome"]);

for (let pessoa in pessoas) {
  console.log(pessoa);
}
