function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Erro");
        return;
      }

      resolve(msg.toUpperCase() + " Passei na promise");
    }, tempo);
  });
}

const promises = [
  espera("Promise1", rand(1, 5)),
  espera("Promise1", rand(1, 5)),
  espera(5400, rand(1, 5)),
  espera("Promise1", rand(1, 5)),
];

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

function baixarPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Pagina em cache");
  } else {
    return espera("Baixei a pagina", 3000);
  }
}

baixarPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((e) => console.log(e));
