const mostraHora = () => {
  let data = new Date();
  return data.toLocaleTimeString("pt-br", {
    hour12: false,
  });
};

const timer = setInterval(() => {
  console.log(mostraHora());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 1000);

setTimeout(() => {
  console.log("Hello World");
}, 3000);

console.log(new Date(0));
