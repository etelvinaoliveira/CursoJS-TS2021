const inputTarefa = document.querySelector(".inputTarefa");
const btnTarefa = document.querySelector(".btnTarefa");
const tarefa = document.querySelector(".tarefas");

const criaLi = () => {
  const li = document.createElement("li");
  return li;
};

inputTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

const criaBtnApagar = (li) => {
  li.innerHmtl += "";

  const botaoApagar = document.createElement("button");

  botaoApagar.innerText = "Apagar";
  // botaoApagar.classList.add('apagar')

  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");

  li.appendChild(botaoApagar);
};

const clearInput = () => {
  inputTarefa.value = "";
  inputTarefa.focus();
};

const criaTarefa = (textoInput) => {
  const li = criaLi();

  li.innerText = textoInput;
  tarefa.appendChild(li);

  clearInput();
  criaBtnApagar(li);
  salvarTarefas();
};

btnTarefa.addEventListener("click", () => {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", (e) => {
  const elemento = e.target;

  if (elemento.classList.contains("apagar")) {
    elemento.parentElement.remove();
    salvarTarefas();
  }
});

const salvarTarefas = () => {
  const liTarefas = tarefa.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);

  localStorage.setItem("tarefas", tarefasJSON);
};

const adicionaTarefasSalvas = () => {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);
  
  for (lista of listaDeTarefas) {
    criaTarefa(lista);
  }
};

adicionaTarefasSalvas();
