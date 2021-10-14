const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 100 ? "Usuário VIP" : "Usuário normal";

const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);
