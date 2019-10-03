import React, { useEffect, useState } from 'react';
import  { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

export default function Info({match}) {
  const spotId = decodeURIComponent(match.params.id);
  // state = data do vuejs
  // setState = Altera o valor do state
  // data() => ({
  //   spot: []
  // })
  const [spot, setSpot] = useState([]);
  const [techs, setTechs] = useState([]);
  // methods: {
  //   async loadSpot() {
  //     // resto da funcao
  //   }
  // }
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
     <h1>Informações</h1>
     <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
     <h2>A sala está reservada para a empresa:</h2>
     <h3>{spot.company}</h3>
     <h2>Usando as Técnologias:</h2>
     <>
        { techs.map(tech => (
          <li>{tech}</li> 
        ))}
    </>
    <h2>Valor:</h2>
    <h3>{spot.price ? `R$${spot.price}/dia` : 'Gratuito'}</h3>
     <Link to="/dashboard"><button id="btn-voltar">Voltar</button></ Link>
      <button id="btn-excluir">Excluir</button>
    </>
  )
}
