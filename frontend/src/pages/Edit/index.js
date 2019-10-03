import React, { useEffect, useState } from 'react';
import  { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

export default function Edit({match, history}) {
  const spotId = decodeURIComponent(match.params.id);

  const [spot, setSpot] = useState([]);
  const [techs, setTechs] = useState([]);
  
  useEffect(() => {
    async function loadSpot(){
      const response = await api.get('/spots', {
        params: { _id:spotId }
      });
      setSpot(response.data)
      setTechs(response.data.techs)
    }

    loadSpot();
  }, [])
  return (
    <>
     <h1>Editar</h1>
     
      <button id="btn-concluir">Concluir</button>
     <Link to="/dashboard"><button id="btn-voltar">Voltar</button></ Link>
    </>
  )
}