function* gerador1() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

const g1 = gerador1();
console.log(g1.next());

for (let valor of g1) {
  console.log(valor);
}

function* gerador2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const g2 = gerador2();
console.log(g2.next().value);

function* gerador3() {
  yield 0;
  yield 1;
  yield 2;
}

function* gerador4() {
  yield* gerador3();
  yield 3;
  yield 4;
}

const g4 = gerador4();

for (let valor of g4) {
  console.log(valor);
}

function* gerador5() {
  yield function () {
    console.log("Mensagem");
  };

  return function () {
    console.log("Return");
  };

  yield function () {
    console.log("Mensagem 2");
  };
}

const g5 = gerador5();
const funcao1 = g5.next().value;

funcao1();
