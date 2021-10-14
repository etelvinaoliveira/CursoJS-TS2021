const numero = Number(prompt("Digite um número"));

document.getElementById("numero").innerHTML = numero;

let texto = document.getElementById("texto");

texto.innerHTML = `<p> Raiz quadrada: ${Math.pow(numero, 1 / 2)} </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p> Arredondado para cima:${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`;
