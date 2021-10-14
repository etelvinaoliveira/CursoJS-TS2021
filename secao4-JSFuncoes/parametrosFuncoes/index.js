function funcao1() {
  let total = 0;

  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total);
}

funcao1(1, 2, 3, 4, 5);

function funcao2(a, b, c) {
  console.log(a, b, c);
}

funcao2(1, 2);
funcao2(1, 2, 3, 4, 5);

function funcao3(a, b) {
  b = b || 0;
  console.log(a + b);
}

funcao3(2);

function funcao4({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

const obj = { nome: "Barbara", sobrenome: "Costa", idade: 23 };
funcao4(obj);
funcao4({ nome: "Barbara", sobrenome: "Costa", idade: 23 });

function funcao5([nome, sobrenome, idade]) {
  console.log(nome, sobrenome, idade);
}

const array = ["Barbara", "Costa", 23];
funcao5(array);
funcao5(["Barbara", "Costa", 23]);

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }

  console.log(acumulador);
}

conta("+", 0, 20, 30, 40, 50);