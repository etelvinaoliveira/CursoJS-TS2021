class CPF {
  constructor(cpf) {
    this.cpf = cpf;
  }

  validaCPF() {
    const cpfLimpo = this.cpf.replace(/\D+/g, "");

    if (typeof cpfLimpo === "undefined") return "CPF inválido";
    if (cpfLimpo.length !== 11) return "CPF inválido";
    if (this.isSequence(cpfLimpo)) return "CPF inválido";

    const noveDigitos = cpfLimpo.slice(0, -2);
    const primeiroDigito = this.geraDigito(noveDigitos);
    const segundoDigito = this.geraDigito(noveDigitos + primeiroDigito);
    const novoCPF = noveDigitos + primeiroDigito + segundoDigito;

    return cpfLimpo === novoCPF ? "CPF válido" : "CPF inválido";
  }
  geraDigito(valor) {
    let arrayCPF = Array.from(valor);
    let multiplicador = valor.length + 1;

    const multiplicacao = arrayCPF.reduce((acumulador, valores) => {
      acumulador += valores * multiplicador;
      multiplicador--;
      return acumulador;
    }, 0);

    const digito = 11 - (multiplicacao % 11);
    
    return digito >= 10 ? "0" : String(digito);
  }
  isSequence(valor) {
    return valor[0].repeat(valor.length) === valor;
  }
}
const cpf = new CPF("111.111.111-11");
console.log(cpf.validaCPF());
