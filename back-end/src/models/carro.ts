import { Veiculo } from "../interfaces/veiculo";

export class Carro implements Veiculo {
    modelo: string;
    anoDeFabricacao: number;
    qtdPortas: number;
    marca: string;

    constructor(modelo: string, anoDeFabricacao: number, qtdPortas: number, marca: string) {
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.qtdPortas = qtdPortas;
        this.marca = marca;
    }

}