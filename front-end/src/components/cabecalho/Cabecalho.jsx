import React from 'react';
import logo from '../../img/kukac_logo.webp';
import 'animate.css';
import './cabecalho.css';

export default function Cabecalho() {
  return (
    <section className="inicio">
      <img src={logo} alt="Um caracou e Kukac escrito" className="animate__animated animate__zoomIn" />
      <h1 className="animate__animated animate__zoomIn tituloInicial">Olá equipe da Kukac!</h1>
      <p className="animate__animated animate__zoomIn">Rolando para baixo vocês terão acesso a minha resolução do desafio proposto</p>
      <p className="seta animate__animated animate__fadeInUp">˅</p>
    </section>
  )
}
