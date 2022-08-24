import './App.css';
import React, { useState } from 'react'
import Nav from './componentes/busqueda/Nav.jsx';
import Cards from './componentes/Cards/Cards.jsx';

import Ciudad from './componentes/Navigation/ciudad.jsx'
import Footer from './componentes/Navigation/footer.jsx'
import About from './componentes/Navigation/about.jsx'
import { Route } from 'react-router-dom'

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    
    let apiKey = '4ae2636d8dfbdc3044bede63951a019b'
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [
            ...oldCities, 
            ciudad
          ]);// estaba todo en una sola linea
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    const nuevasCiudades = cities.filter((item) => item.id !== id);
    setCities(nuevasCiudades);
  }

  function onfilter(id) {
    // console.log("onfilter id es: "+id)
    // console.log(cities)
    const buscar = cities.filter((item) => item.id == id);
    // console.log(buscar)
    return buscar
  }
  return (
    <div className="App">
      { /* Tu código acá: */ }
      <div> {/* contenedor arriba */}
        <Route path='/'
          render ={() => <Nav onSearch={onSearch}/>}
        >
        </Route>
        
        <switch>
          <Route path='/ciudad/:idCiudad'
            render = {({match}) => 
            
            <Ciudad city={onfilter(match.params.idCiudad)}/>}
            // onfilter(match.params.idCiudad)
          >
          </Route>

          <div>
            <Route exact path='/'>
              <Cards
                cities={cities}
                onClose={onClose}
              />
            </Route>
          </div>

          <Route path='/about'>
            <About />
          </Route>
        </switch>
      </div>

      <div> {/* contenedor abajo */}
        <Route exact path='/'>
          <Footer />
        </Route>
      </div>
    </div>
  );
}
