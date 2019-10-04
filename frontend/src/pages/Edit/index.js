import React, { useEffect, useState, useMemo } from 'react';
import  { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

export default function Edit({match, history}) {
  const spotId = decodeURIComponent(match.params.id);

  const [spot, setSpot] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function spotEdit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    await api.put(`/spots/${spotId}`, {
      company, techs, price
    })

    history.push ('/dashboard');
  }

  useEffect(() => {
    async function loadSpot(){
      const response = await api.get('/spots', {
        params: { _id:spotId }
      });
      setSpot(response.data)
      setTechs(response.data.techs)
      setCompany(response.data.company)
      setPrice(response.data.price)
    }

    loadSpot();
  }, [])
  return (
    <>
     <h1>Editar</h1>
     <form onSubmit={spotEdit}>
      <label 
      id="thumbnail" 
      style={{backgroundImage: `url(${preview})`}}
      className={thumbnail ? 'has-thumbnail' : ''}>
        <img id="thumb" src={spot.thumbnail_url} alt="Select img"/>
      </label>
      <label htmlFor="company">Empresa *</label>
      <input
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />
    <label htmlFor="company">Tecnologias *<span>(separadas por vírgula)</span></label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />
    <label htmlFor="company">Valor da Diária *<span>(em branco para gratuíto)</span></label>
      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button id="btn-concluir" type="submit" >Concluir</button>
    </form>
     <Link to="/dashboard"><button id="btn-voltar">Voltar</button></ Link>
    </>
  )
}