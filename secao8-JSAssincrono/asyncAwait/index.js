function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Erro");
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + " Passei na promise");
    }, tempo);
  });
}

espera("Frase1", 3000)
  .then((valor) => {
    console.log(valor);
    return espera("Fase 2", rand());
  })
  .then((fase) => {
    console.log(fase);
    return espera("Fase 3", rand());
  })
  .then((fase) => console.log(fase))
  .catch((err) => console.log(err));

async function executa() {
  try {
    const fase1 = await espera("Fase 1", 1000);
    console.log(fase1);

    setTimeout(function () {
      console.log("Essa promise estava pendente " + fase1);
    }, 1100);

    const fase2 = await espera("Fase 2", rand());
    console.log(fase2);

    const fase3 = await espera("Fase 3", rand());
    console.log(fase3);
  } catch (error) {
    console.log(e);
  }
}

executa();
