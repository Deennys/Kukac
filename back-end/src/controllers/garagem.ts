import { Request, Response } from "express";
import { Carro } from "../models/carro";
import { Moto } from "../models/moto";

class Garagem{
    public getGaragem(req: Request, res: Response) {
        res.json(require('./../../db.json'));
    }

    public postGaragem(req: Request, res: Response) {
        const fs = require("fs");
        const veiculos = require('./../../db.json');
        const tipo: string = req.body.veiculo
        if (tipo === 'carro') {
            const carro = new Carro(
                req.body.modelo,
                req.body.anoDeFabricacao,
                req.body.qtdPortas,
                req.body.marca
            )
            const add = {
                id: (veiculos.id + 1),
                veiculo: "carro",
                modelo: carro.modelo,
                anoDeFabricacao: carro.anoDeFabricacao,
                qtdPortas: carro.qtdPortas,
                marca: carro.marca
            }
            veiculos.push(add);
        } else {
            const moto = new Moto(
                req.body.modelo,
                req.body.anoDeFabricacao,
                req.body.marca
            )
            const add = {
                id: (veiculos.id + 1),
                veiculo: "moto",
                modelo: moto.modelo,
                anoDeFabricacao: moto.anoDeFabricacao,
                qtdPortas: moto.qtdPortas,
                marca: moto.marca,
                rodas: moto.rodas
            }
            veiculos.push(add);
        }
        
        fs.writeFile('db.json', JSON.stringify(veiculos), err => {
            if (err) throw err;
        });
        res.status(200).json("ok");
    }

    public deleteGaragem(req: Request, res: Response) {
        const fs = require("fs");
        const id = req.body.id;
        const veiculos: [] = require('./../../db.json');
        const filtrado = veiculos.filter(item => item["id"] != id);
        fs.writeFile('db.json', JSON.stringify(filtrado), err => {
            if (err) throw err;
        });
        res.status(200).json("ok");
    }

}

export const garagem = new Garagem();