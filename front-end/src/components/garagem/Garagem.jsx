import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './garagem.css';

export default function Garagem() {

    const [texto, setTexto] = useState('');
    const [resposta, setResposta] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res;
        let flag = true;
        if (e.target[0].value === 'carro') {
            res = await axios.post('http://localhost:8080/garagem', {
                "veiculo": e.target[0].value,
                "modelo": e.target[1].value,
                "anoDeFabricacao": e.target[3].value,
                "qtdPortas": e.target[4].value,
                "marca": e.target[2].value
            }).then(res => res.data);
        } else {
            res = await axios.post('http://localhost:8080/garagem', {
                "veiculo": e.target[0].value,
                "modelo": e.target[1].value,
                "anoDeFabricacao": e.target[3].value,
                "qtdPortas": 0,
                "marca": e.target[2].value
            }).then(res => res.data);
            flag = false
        }
        setResposta(res)
        if (resposta) {
            setTexto(`${flag ? 'Seu carro foi adicionado na garagem' : 'Sua moto foi adicionada na garagem'}`);
            setTimeout(() => {
                setTexto('')
            }, 2000)
        }
    }

    return (
        <section className='garagem'>
            <form className="card" onSubmit={handleSubmit}>
                <h1 className='tituloTroco'>Controle da garagem</h1>
                <label htmlFor="tipoVeiculo">Qual o tipo de veiculo</label>
                <select name="tipoVeiculo" id="selectVeiculo" required>
                    <option value="carro" >Carro</option>
                    <option value="moto" >Moto</option>
                </select>
                <div className="containerGaragem">
                    <div className='garagemTexto'>
                        <input className="inputNumero" type="text" name="modelo" placeholder="modelo" />
                        <input className="inputNumero" type="text" name="marca" placeholder="marca" />
                    </div>
                    <div className='garagemTexto'>
                        <input className="inputNumero" type="number" name="anoDeFabricação" placeholder="Ano de fabricação" />
                        <input className="inputNumero" type="number" name="qtdPortas" placeholder="Numero de portas" />
                    </div>
                </div>
                <input className='botaoSubmit' type="submit" value="Cadastrar" />
                {texto}
            </form>
        </section>
    )
}
