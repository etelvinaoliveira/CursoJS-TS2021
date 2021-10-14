function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log("Saldo insuficiente");
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Agência: ${this.agencia} / Conta: ${this.conta}`);
  console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
};

const conta = new Conta(11, 22, 10);
console.log(conta);

conta.depositar(10);
conta.sacar(1);

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log("Saldo insuficiente");
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10);

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(11, 22, 0);
contaPoupanca.depositar(10);
