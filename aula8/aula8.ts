class Carro {
    public marca: String
    public cor: String
    public placa: String
    public modelo: String
    public ano: Number

    constructor (marca,cor,placa,modelo,ano){
         this.cor = cor
         this.ano = ano
         this.marca = marca
         this.placa = placa
         this.modelo = modelo
        
    }

    ligar(){
     console.log("corre berg")
    }
    desligar(){
    console.log ("a mimir")
    }


}

const carro1 = new Carro('fit','rosa', 'pig123','porquino', 2025)
const carro2 = new Carro("bat", "azul" , "ahh", "sim", "33")

carro1.ligar();
carro1.desligar();


console.log(carro1);
