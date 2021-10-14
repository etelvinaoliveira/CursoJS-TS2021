const pessoa = {
    nome: 'Sofia',
    sobrenome: 'Rangel',
    idade: '26',
    endereco: {
        rua: 'Rua Sansão Alves dos Santos',
        numero: 1446
    }
}

console.log(pessoa.nome)

// const nome = pessoa.nome
const { nome: teste = '', sobrenome, idade } = pessoa
const { endereco: { rua, numero } } = pessoa
const { nome, ...resto } = pessoa