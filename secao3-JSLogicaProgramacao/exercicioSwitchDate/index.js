/*
const dia = data.getDay()
const getDiaSemana = (dia) =>{
    const diaSemana = [ domingo, segunda, terça, quarta, quinta, sexta, sabado ]
    return diaSemana[dia]
}
*/

const data = document.querySelector("h1");

const getDataTime = () => {
  const date = new Date();
  const options = { dateStyle: "full", timeStyle: "short" };
  return date.toLocaleString("pt-br", options);
};

data.innerHTML = getDataTime();
