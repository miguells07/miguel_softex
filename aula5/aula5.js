let rdl = require("readline-sync")
let nm = rdl.question("digite seu seu nome: ")
let idd = rdl.question("digite sua idade: ")
if(idd <=0){
    console.log ('idade inválida')
}
else if(idd <= 17){
    console.log("Você é menor de idade, ", nm)
}
else{
    console.log(`Você é maior de idade, ${nm}`)
}