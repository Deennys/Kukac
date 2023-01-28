import React from 'react';
import Cabecalho from './components/cabecalho/Cabecalho';
import Cep from './components/cep/Cep';
import Garagem from './components/garagem/Garagem';
import Palindromo from './components/palindromo/Palindromo';
import Troco from './components/troco/Troco';

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Palindromo />
      <Troco />
      <Garagem />
      <Cep />
    </div>
  )
}
