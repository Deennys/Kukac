import { Request, Response } from "express";
import { verificaPalindromo, calculaCedulas } from "../functions/function";

class Controller{
    public palindromo(req: Request, res: Response) {
        const numero: String = req.body.numero;
        const numeros: String[] = [];
        let posicao: number = 0;
        let intervalo: number = 2;

        while (intervalo <= numero.length) {
            const recorte = numero.slice(posicao, (posicao + intervalo))
            if (verificaPalindromo(recorte) ) {
                numeros.push(recorte)
            }
            posicao += 1;
            if ((posicao+intervalo) > numero.length){
                posicao = 0;
                intervalo += 1;
            }
        }

        return res.json(JSON.stringify(numeros));
    }

    public troco(req: Request, res: Response) {
        const vlrCompra: number = parseInt(req.body.compra);
        const vlrPago: number = parseInt(req.body.dinheiro);
        const vlrTroco: number = vlrPago - vlrCompra >= 0 ? vlrPago - vlrCompra : 0; 

        const qtdCedulas: number[] = calculaCedulas(vlrTroco);

        const dados: object = {
            compra: vlrCompra,
            dinhero: vlrPago,
            troco: vlrTroco,
            cedulas: {
                cem: qtdCedulas[0],
                dez: qtdCedulas[1],
                um: qtdCedulas[2],
            }
        }

        res.json(JSON.stringify(dados));
    }
}

export const controller = new Controller();