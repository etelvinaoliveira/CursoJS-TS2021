const soma = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    // throw new Error()
    throw new ReferenceError("x e y precisam ser números");
  }
  return x + y;
};

try {
  console.log(soma(1, 2));
  // console.log(soma('1',2))
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally");
}

const retornaHora = (data) => {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

try {
  const data = new Date("01-01-1970 22:58:12");
  const hora = retornaHora(data);
  console.log(hora);
} catch (e) {
  console.log(e);
} finally {
  console.log("Tenha um bom dia");
}
