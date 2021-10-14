function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function funcao(callback) {
  setTimeout(function () {
    console.log("Função");
    if (callback) callback();
  }, rand());
}

funcao(function () {
  console.log("Função 2");
});
