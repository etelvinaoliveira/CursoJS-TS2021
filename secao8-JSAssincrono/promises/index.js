// Callback
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo, cb) {
  setTimeout(() => {
    console.log(msg);
  }, tempo);
  if (cb) cb();
}

espera("Frase 1", rand(1, 3), function () {
  espera("Frase 2", rand(1, 3), function () {
    espera("Frase 4", rand(1, 3));
  });
});

// Promise
function rand2(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera2(msg, tempo, cb) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(new Error());
    setTimeout(() => {
      resolve(msg);
    }, tempo);
    if (cb) cb();
  });
}

espera2("Frase1", rand2(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return espera2(22222, rand2(1, 3));
  })
  .then((resposta) => {
    return resposta + "vai pro outro then";
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => {
    console.log("Erro:", e);
  });
