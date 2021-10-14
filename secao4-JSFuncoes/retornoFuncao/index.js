function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + "" + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("mundo!"));

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
console.log(duplica(2));
