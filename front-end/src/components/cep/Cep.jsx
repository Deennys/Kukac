import React, { useState } from 'react';
import axios from 'axios';
import './cep.css';

export default function Cep() {

    const [texto, setTexto] = useState('');
    const [resposta, setResposta] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        let ceps = transformaArr(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value);
        let res = []
        while (ceps[0]) {
            res.push(await buscaCep(ceps.shift()));
        }
        console.log(res);
        setResposta(res)
        setTexto(`
            ${resposta.map((item) => {
                return `${item.logradouro}, ${item.bairro}, ${item.localidade} - ${item.uf} ||  `
            })}
        `)
    }

    async function buscaCep(cep) {
        return await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.data);
    }

    function transformaArr() {
        var args = [].slice.call(arguments, 0);
        return args;
    }
    return (
        <section className='cep'>
            <form className="card" onSubmit={handleSubmit}>
                <h1 className='tituloTroco'>Busca ceps</h1>
                <div className="containerGaragem">
                    <div className='garagemTexto'>
                        <input className="inputNumero" type="number" name="cep" placeholder="Cep" id='cepInput' required/>
                        <input className="inputNumero" type="number" name="cep" placeholder="Cep" id='cepInput' required/>
                        <input className="inputNumero" type="number" name="cep" placeholder="Cep" id='cepInput' required/>
                    </div>
                    <div className='garagemTexto'>
                        <input className="inputNumero" type="number" name="cep" placeholder="Cep" id='cepInput' required/>
                        <input className="inputNumero" type="number" name="cep" placeholder="Cep" id='cepInput' required/>
                    </div>
                </div>
                <input className='botaoSubmit' type="submit" value="buscar" />
                {texto}
            </form>
        </section>
    )
}
