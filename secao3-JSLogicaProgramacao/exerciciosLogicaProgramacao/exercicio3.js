const fizzBuzz = (numero) => {
  const valor = Number(numero);

  if (Number.isNaN(valor)) {
    //if(typeof numero !== 'number')
    return valor;
  } else if (valor % 3 === 0 && valor % 5 === 0) {
    return "FizzBuzz";
  } else if (valor % 2 === 0) {
    return "Fizz";
  } else if (valor % 5 === 0) {
    return "Buzz";
  } else {
    return valor;
  }
};

let i = 0;

while (i <= 100) {
  console.log(fizzBuzz(i));
  i++;
}
