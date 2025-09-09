import { veiculo } from "./veiculo";

 export class F1 extends veiculo{

    public tamanho :Number ;

    constructor(tamanho,roda,placa  ){
         super (roda,placa)
         this.tamanho = tamanho
    }

 }