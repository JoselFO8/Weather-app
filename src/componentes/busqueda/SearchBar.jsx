import estilo from  './search.module.css';
import React, { useState } from 'react';

export default function SearchBar({onSearch}) {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [ciudad, setCiudad] = useState("");
  
  const handleChange = (e) => {
      setCiudad(
        e.target.value
      ) 
  }

  const handleClick = () =>{
    // console.log(ciudad)
    onSearch(ciudad)
  }

  return (
    <div className={estilo.contenedorSearch}>
      
      
      <input 
        id={estilo.input} 
        type="text" 
        placeholder='Ciudad...'
        name="mensaje"
        onChange={handleChange}
      >
      </input>
      <button 
        id={estilo.button} 
        onClick={handleClick}
      >Agregar
      </button>
    </div>
  );
}

