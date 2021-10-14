const paragrafos = document.querySelector(".paragrafos");
const paragrafo = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafo) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "white";
}
