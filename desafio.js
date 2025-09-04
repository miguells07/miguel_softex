const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cliente = "";
let total = 0;
let pedidos = [];

// Pergunta o nome do cliente
rl.question("Digite seu nome: ", (respostaNome) => {
  cliente = respostaNome;
  console.log(`Bem-vindo à Techlanche, ${cliente}!`);

  console.log("\nCardápio:");
  console.log("1. Hambúrguer - R$ 15");
  console.log("2. Batata Frita - R$ 10");
  console.log("3. Refrigerante - R$ 7");
  console.log("0. Finalizar pedido");

  // Definimos um número máximo de escolhas (por exemplo, 10) para usar for
  let escolhas = 10; 

  let i = 0;

  function perguntar() {
    if (i >= escolhas) {
      finalizar();
      return;
    }

    rl.question("\nEscolha o número do item: ", (resposta) => {
      if (resposta === "1") {
        console.log("Você pediu Hambúrguer");
        pedidos.push("Hambúrguer");
        total += 15;
      } else if (resposta === "2") {
        console.log("Você pediu Batata Frita");
        pedidos.push("Batata Frita");
        total += 10;
      } else if (resposta === "3") {
        console.log("Você pediu Refrigerante");
        pedidos.push("Refrigerante");
        total += 7;
      } else if (resposta === "0") {
        finalizar();
        return;
      } else {
        console.log("Opção inválida! Tente novamente.");
      }

      i++;
      perguntar();
    });
  }

  function finalizar() {
    if (pedidos.length > 0) {
      console.log("\nItens escolhidos:");
      for (let j = 0; j < pedidos.length; j++) {
        console.log("- " + pedidos[j]);
      }
      console.log(`Total a pagar: R$ ${total}`);
    } else {
      console.log("\nVocê não pediu nada.");
    }
    console.log("Obrigado pela preferência!");
    rl.close();
  }

  perguntar();
});
