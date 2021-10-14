const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);

alunos[alunos.length] = "Fábio";

alunos.push("Luiza"); 
alunos.unshift("Luana");

const removido = alunos.pop();
const removidoInicio = alunos.shift();

delete alunos[1];
alunos.slice(0, 3);

console.log(alunos);
console.log(alunos instanceof Array);
console.log(typeof alunos);
console.log(alunos[50]);
