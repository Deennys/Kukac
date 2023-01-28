import axios from 'axios';
import React, { useState } from 'react';
import './palindromo.css';

export default function Palindromo() {

    const [texto, setTexto] = useState('');
    const [resposta, setResposta] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await axios.post('http://localhost:8080/palindromo', {
            "numero": e.target[0].value
        }).then(res => res.data);
        res = res.replace(/["\[\]]/g, '').replace(/[,]/g, ', ');
        setResposta(res)
        setTexto(`
            Os palindromos encontrados são:
            ${resposta}
        `)
    }

    return (
        <section className='palindromo'>
            <form className="card" onSubmit={handleSubmit}>
                <label className='tituloPalindromo' hmtlfor="numeros">Verificador de palindromos</label>
                <input className="inputNumero" type="number" name="numeros" required placeholder="Digite aqui o numero" />
                <input className='botaoSubmit' type="submit" value="Verificar" />
                {texto}
            </form>
        </section>
    )
}
