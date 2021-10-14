const pessoa = [
    { id: 3, nome: 'Maria' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Maria' }
]

/*
const novasPessoas = {}
for (const pessoas of pessoa) {
    const { id } = pessoas
    novasPessoas[id] = { ...pessoas }
}
*/

const novasPessoas = new Map()
for (const pessoas of pessoa) {
    const { id } = pessoas
    novasPessoas.set(id, { ...pessoas })
}

console.log(novasPessoas.get(2))

/*
for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome)
}
*/

/*
for (const pessoa of novasPessoas.keys()) {
    console.log(pessoa)
}
*/

for (const pessoa of novasPessoas.values()) {
    console.log(pessoa)
}

novasPessoas.delete(2)
console.log(novasPessoas)