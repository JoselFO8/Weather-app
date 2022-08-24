import React from 'react';
import logoHenry from '../../logoHenry.png';
import SearchBar from './SearchBar.jsx';
import estilo from  './search.module.css';
import { Link } from 'react-router-dom';


export default function Nav({onSearch}) {
  return (
    <div className={estilo.nav}>
      <Link to='/'>
        <div className={estilo.contIzq}>

          <div className={estilo.img}>
            <img id={estilo.logo} src={logoHenry} alt="Logo Henry" />
          </div>

          <div className={estilo.texto}>
            <span> Henry - Weather App ⛅</span>
          </div>
        </div>
      </Link>
      <div className={estilo.contDer}>
        <SearchBar onSearch={onSearch}/>
      </div>

    </div>
  );
};


