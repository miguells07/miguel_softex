let rdl = require("readline-sync")

let nm = rdl.question("digite seu seu nome: ")

switch(nm){
    case "gr":
        console.log("A lenda")
        break;
    case "Gaara":
        console.log("Kazegake!")
        break;
    default:
        console.log("não")
}