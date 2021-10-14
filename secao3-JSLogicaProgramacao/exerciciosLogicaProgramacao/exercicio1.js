const maximo = (valor1, valor2) => {
  let maior = Math.max(valor1, valor2);

  if (valor1 === valor2) return "Os valores são iguais";
  return `${maior} é maior`;
};

console.log(maximo(0.1, 0.00001));
