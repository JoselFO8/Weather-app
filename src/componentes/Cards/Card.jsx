import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import estilo from './card.module.css';

import Ciudad from '../Navigation/ciudad.jsx'
// import Cards from './Cards';

export default function Card({min, max, name, img, onClose, id}) {
  // acá va tu código
  const [i, setI] = useState();

  const handleClick = (id) =>{
    setI = id
    
    onClose(i)
  }
  
  function celsius(temp) {
    return temp + "°"
  }

  return (
    <div id={`${id}`} className={estilo.contenedor}> 
      <div className={estilo.card}>

        <div className={estilo.contenedorCerrar}> 
          <button 
            className={estilo.cerrar} 
            onClick={() => onClose(id)}
            > X 
            </button>
        </div>

        <div className={estilo.ciudad}>
          <Link className={estilo.link} to={`/ciudad/${id}`} 
            render ={() => <Ciudad elemento={id}/>}
          >
            <h4 id={estilo.e1}> Ciudad: {name}</h4>
          </Link>
        </div>
        
        <div className={estilo.contenedorClima}>
          <div className={estilo.min}>
            <h4>Min: {celsius(min)}</h4>
          </div>

          <div className={estilo.max}>
            <h4>Max: {celsius(max)}</h4>
          </div>

          <div className={estilo.img}>
            <img id={estilo.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='logo clima'></img> 
          </div>
        </div>

      </div>
    </div>
  )
};
