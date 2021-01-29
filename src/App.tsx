import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import {Locais} from './type/CEP'

function App() {

  const [cidade, setCidade] = useState<string>("")
  const [cep, setCep] = useState<Locais>()

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cidade}/json/`)
      .then(resposta => setCep(resposta.data))
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => setCidade(event.target.value)} /> 
      <button onClick={getCep}>Ver CEP</button>
        <h1>CEP:</h1>

        {
          <>
              <p>Bairro: {cep?.bairro}</p>
              <p>Cep: {cep?.cep}</p>
              <p>Complemento: {cep?.complemento}</p>
              <p>DDD: {cep?.ddd}</p>
              <p>GIA: {cep?.gia}</p>
              <p>IBGE: {cep?.ibge}</p>
              <p>Localidade: {cep?.localidade}</p>
              <p>Logradouro: {cep?.logradouro}</p>
              <p>SIAFI: {cep?.siafi}</p>
              <p>UF: {cep?.uf}</p>
          </>
        }
        
    </div>
  );
}

export default App;
