function Pessoa(nome,sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = () => this.nome + ''+ this.sobrenome

const pessoa = new Pessoa('Manuela', 'Amaral')
const data = new Date()

console.dir(pessoa)
console.dir(data)