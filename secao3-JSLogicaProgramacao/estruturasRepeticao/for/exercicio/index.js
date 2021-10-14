const elementos = [
  { tag: "p", texto: "Frase1" },
  { tag: "div", texto: "Frase2" },
  { tag: "section", texto: "Frase3" },
  { tag: "p", texto: "Frase4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tags = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  tags.appendChild(textoCriado);
  div.appendChild(tags);
}

container.appendChild(div);
