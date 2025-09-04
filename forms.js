const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const idadeInput = prompt("Digite sua idade: ");

// Converte a entrada de idade para um número inteiro.
const idade = parseInt(idadeInput, 10);

// Verifica se a idade é um número válido e positivo.
if (isNaN(idade) || idade <= 0) {
  console.log(
    "Idade inválida. Por favor, insira um número válido maior que zero."
  );
} else {
  // Pede o resto das informações apenas se a idade for válida.
  const dataNascimento = prompt("Digite sua data de nascimento: ");
  const corFavorita = prompt("Digite sua cor favorita: ");

  console.log(`\n---- Formulário de ${nome}! ----`);
  console.log(`---- Idade: ${idade}`);
  console.log(`---- Data de nascimento: ${dataNascimento}`);
  console.log(`---- Cor favorita: ${corFavorita}`);

  // A verificação de maioridade agora está dentro do fluxo lógico correto.
  if (idade >= 18) {
    console.log("---- Você é maior de idade. ----");
  } else {
    console.log("---- Você é menor de idade. ----");
  }
}
