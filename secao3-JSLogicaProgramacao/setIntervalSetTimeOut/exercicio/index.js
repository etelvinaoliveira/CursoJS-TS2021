const relogio = document.querySelector(".timer");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let timer;

const getTimeFromSeconds = (segundos) => {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-br", {
    hour12: false,
    timeZone: "GMT",
  });
};

const iniciarRelogio = () => {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
};

document.addEventListener("click", (evento) => {
  const elemento = evento.target;
  if (elemento.classList.contains("zerar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
  }
  if (elemento.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    iniciarRelogio();
  }
  if (elemento.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    clearInterval(timer);
  }
});
