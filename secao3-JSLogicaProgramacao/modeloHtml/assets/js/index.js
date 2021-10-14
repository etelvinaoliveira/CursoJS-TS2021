const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let peso = document.querySelector("#peso");
  peso = Number(peso.value);

  let altura = document.querySelector("#altura");
  altura = Number(altura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getIMC(peso, altura);
  const classificacaoIMC = getClassificacaoIMC(imc);
  const msg = `Seu imc é ${imc} (${classificacaoIMC})`;

  setResultado(msg, true);
});

const getClassificacaoIMC = (imc) => {
  const classificacao = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return classificacao[5];
  if (imc >= 35) return classificacao[4];
  if (imc >= 30) return classificacao[3];
  if (imc >= 25) return classificacao[2];
  if (imc >= 18.5) return classificacao[1];
  if (imc < 18.5) return classificacao[0];
};

const getIMC = (peso, altura) => {
  const imc = peso / altura ** 2;
  return imc;
};

const gerarParagrafo = () => {
  const p = document.createElement("p");
  return p;
};

const setResultado = (msg, isValid) => {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";

  const p = gerarParagrafo();

  if (isValid) {
    p.classList.add("paragrafoResultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;

  resultado.appendChild(p);
};
