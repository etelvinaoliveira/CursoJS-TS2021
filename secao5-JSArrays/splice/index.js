//                                         -2         -1
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];
// const removidos = nomes.splice(-3,Number.MAX_VALUE)
// const removidos = nomes.splice(5,0,'Luana')

//pop
const pop = nomes.splice(-1, 1);
console.log(nomes);

//push
const push = nomes.splice(nomes.length, 0, "Luana");
console.log(nomes);

//shift
const shift = nomes.splice(0, 1);
console.log(nomes);

//unshift
const unshift = nomes.splice(0, 0, "Luana");
console.log(nomes);
