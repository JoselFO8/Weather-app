import React, { useState } from 'react';
import Card from './Card.jsx';
import estilo from  './card.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  
  return (
    <div className={estilo.contenedorCards}>
      {
        cities ? cities.map((arr) => {
          return (
            <Card
              id={arr.id}
              max={arr.max}
              min={arr.min}
              name={arr.name}
              img={arr.img}
              // onClose={() => onClose(arr.id)}
              onClose={onClose}
            />
          )
        }) :  <div>
                <h1>No hay ciudades para mostrar</h1>
              </div>
      }
    </div>  
  )
};
