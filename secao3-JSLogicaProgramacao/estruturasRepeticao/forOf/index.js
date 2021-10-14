const nomes = ["Luiz", "Otávio", "Henrique"];

for (let nome of nomes) {
  console.log(nome);
}

nomes.forEach((valor, indice, array) => {
  console.log(valor, indice, array);
});
