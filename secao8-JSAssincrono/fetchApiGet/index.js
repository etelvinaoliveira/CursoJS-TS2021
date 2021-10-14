document.addEventListener("click", (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(element);
  }
});

const carregaPagina = async (element) => {
  try {
    const href = element.getAttribute("href");
    const response = await fetch(href);

    if (!(response.status >= 200 && response.status < 300))
      throw new Error(`Erro ${response.status}`);

    const html = await response.text();
    carregaResultado(html);
  } catch (e) {
    console.error(e);
  }
  /*
  fetch(href)
    .then((response) => {
      if (!(response.status >= 200 && response.status < 300))
        throw new Error(`Erro ${response.status}`);
      return response.text();
    })
    .then((html) => carregaResultado(html))
    .catch((e) => console.error(e));
   */
};

const carregaResultado = (response) => {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
};

/*
fetch("pagina1.html")
  .then((response) => {
    if (response.status !== 200) throw new Error("Erro");
    return response.text();
  })
  .then((html) => console.log(html))
  .catch((e) => console.error(e));
*/