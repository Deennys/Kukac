import { Veiculo } from "../interfaces/veiculo";

export class Moto implements Veiculo {
    modelo: string;
    anoDeFabricacao: number;
    qtdPortas: number = 0;
    marca: string;
    rodas: number = 2;

    constructor(modelo: string, anoDeFabricacao: number, marca: string) {
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.marca = marca;
    }

}