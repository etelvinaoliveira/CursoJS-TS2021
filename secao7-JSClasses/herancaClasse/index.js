class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    }
    this.ligado = true;
    console.log(`${this.nome} ligado`);
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já desligado`);
      return;
    }
    this.ligado = false;
    console.log(`${this.nome} desligado`);
  }
}

const dispositivo = new Dispositivo("Smartphone");
dispositivo.ligar();
dispositivo.ligar();
dispositivo.desligar();

class Smartphone extends Dispositivo {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const smartphone = new Smartphone("iPhone", "Preto", "12 Pro Max");
console.log(smartphone);
