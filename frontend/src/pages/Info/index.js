import React, { useEffect, useState } from 'react';
import  { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

export default function Info({match, history}) {
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
  async function deleteSpot(event){
    event.preventDefault();
    await api.delete(`/spots/${spotId}`);
    history.push ('/dashboard');
  }
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
          <li key={tech}>{tech}</li> 
        ))}
    </>
    <h2>Valor:</h2>
    <h3>{spot.price ? `R$${spot.price}/dia` : 'Gratuito'}</h3>
      <Link to={`/edit/${spotId}`}><button id="btn-editar">Editar</button></Link>
      <button id="btn-excluir" onClick={deleteSpot}>Excluir</button>
     <Link to="/dashboard"><button id="btn-voltar">Voltar</button></ Link>
    </>
  )
}
