const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);

console.log(data.toString());

const data2 = new Date(2021, 5, 1, 18, 10, 24);
console.log(data.toString());

const data3 = new Date("2019-04-20T20:20:59");

console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1);
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Milisegundos", data.getMilliseconds());
console.log("Dia da semana", data.getDay());
console.log(data.toString());
console.log(Date.now());

const zeroEsquerda = (num) => (num >= 10 ? num : `0${num}`);

const formataData = (data) => {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth());
  const ano = zeroEsquerda(data.getFullYear());
  const hora = zeroEsquerda(data.getHours());
  const min = zeroEsquerda(data.getMinutes());
  const sec = zeroEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
};

const data4 = new Date();
const dataBrasil = formataData(data4);

console.log(dataBrasil);
