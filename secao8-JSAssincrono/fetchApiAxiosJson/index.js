/*
fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json=>carregaElementos(json))
*/

axios('pessoas.json')
    .then(resposta=>carregaElementos(resposta.data))


const carregaElementos = (json) => {
  const table = document.createElement("table");

  for (let pessoas of json) {
    const tr = document.createElement("tr");

    const nomePessoa = document.createElement("td");
    nomePessoa.innerHTML = pessoas.nome;
    tr.appendChild(nomePessoa);
    table.appendChild(tr);

    const emailPessoa = document.createElement("td");
    emailPessoa.innerHTML = pessoas.email;
    tr.appendChild(emailPessoa);
    table.appendChild(tr);

    const cpfPessoa = document.createElement("td");
    cpfPessoa.innerHTML = pessoas.cpf;
    tr.appendChild(cpfPessoa);

    table.appendChild(tr);
  }
  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
};
