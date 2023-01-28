import axios from 'axios';
import React, { useState } from 'react';
import './troco.css';

export default function () {

    const [compra, setCompra] = useState('')
    const [pago, setPago] = useState('')
    const [troco, setTroco] = useState('')
    const [cedulas, setCedulas] = useState('')
    const [resposta, setResposta] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await axios.post('http://localhost:8080/troco', {
            "compra": e.target[0].value,
            "dinheiro": e.target[1].value
        }).then(res => res.data);
        res = res.replace(/["\{\}:a-z]/g, '').replace(/[,]/g, ', ').split(',');
        setResposta(res)
        if (resposta[0]) {
            setCompra(`Valor da compra: R$${resposta[0]}`);
            setPago(`Valor pago: R$${resposta[1]}`);
            setTroco(`Troco: R$${resposta[2]}`);
            setCedulas(`Cédulas:  100x${resposta[3]},  10x${resposta[4]},  1x${resposta[5]}`); 
        }
    }

    return (
        <section className='troco'>
            <form className="card" onSubmit={handleSubmit}>
                <h1 className='tituloTroco'>Calcula troco</h1>
                <div className="containerTroco">
                    <div>
                        <input className="inputNumero inputTroco" type="number" name="compra" placeholder="Valor da compra" required/>
                    </div>
                    <div>
                        <input className="inputNumero inputTroco" type="number" name="dinheiro" placeholder="Dinheiro pago" required/>
                    </div>
                </div>
                <input className='botaoSubmit' type="submit" value="Calcular" />
                <p>{compra}</p>
                <p>{pago}</p>
                <p>{troco}</p>
                <p>{cedulas}</p>
            </form>
        </section>
    )
}
