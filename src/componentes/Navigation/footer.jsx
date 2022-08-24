import React from 'react';
import About from './about';
import estilo from  './footer.module.css';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className={estilo.footer}>
        <Link to='/about'> 
          <div >
            <h5 id={estilo.about}>About</h5>
          </div>
        </Link>
    </div>
  );
};

