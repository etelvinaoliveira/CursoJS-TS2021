//const nomes = ["Eduardo", "Maria", "Joana"];
const nomes = new Array("Eduardo", "Maria", "Joana");

const novo = nomes;
const novo2 = [...nomes];

nomes[2] = "João";
delete nomes[2];

console.log(nomes.length);

nomes.pop();
nomes.shift();
nomes.push("Joana");
nomes.unshift("Eduardo");
nomes.slice(0, -1);

const nome = "Joaquim Guerra";
const nomes2 = ["Joaquim", "Guerra"];
const nome2 = nomes2.join(" ");

console.log(nome);

const nome3 = nome.replace(" ", "");

console.log(nome.match());
