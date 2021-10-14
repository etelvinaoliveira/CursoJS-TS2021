function ValidaCPF(cpf) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,

    get: function () {
      return cpf.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return "CPF inválido";
  if (this.cpfLimpo.length !== 11) return "CPF inválido";
  if (this.isSequencia()) return "CPF inválido";

  const oitoDigitos = this.cpfLimpo.slice(0, -2);
  const primeiroDigito = this.criaDigito(oitoDigitos);
  const segundoDigito = this.criaDigito(oitoDigitos + primeiroDigito);
  const novoCPF = oitoDigitos + primeiroDigito + segundoDigito;

  return novoCPF === this.cpfLimpo ? "CPF válido" : "CPF inválido";
};

ValidaCPF.prototype.criaDigito = function (cpf) {
  let arrayCPF = Array.from(cpf);
  let regressivo = arrayCPF.length + 1;

  const total = arrayCPF.reduce((acumulador, valor) => {
    acumulador += regressivo * Number(valor);
    regressivo--;
    return acumulador;
  }, 0);

  const digito = 11 - (total % 11);

  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function (cpf) {
  const sequencia =
    this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;

  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF("111.111.111-11");
console.log(cpf.valida());
