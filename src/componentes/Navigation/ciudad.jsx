import estilo from './ciudad.module.css'
// import { useParams } from 'react-router-dom';

export default function Ciudad({city}) {
    let c = city[0]
    
    return (
        <div className={estilo.ciudad}>
            
            <div className={estilo.contenedor}> 
                <div className={estilo.titulo}> 
                    <h3>{c.name}</h3>
                </div>
                
                <div className={estilo.texto}>
                    <p>Temperatura: {c.temp}°</p>
                    <p>Clima: {c.weather}</p>
                    <p>Viento: {c.wind} km/h</p>
                    <p>Canidad de nubes: {c.clouds}</p>
                    <p>Latitud: {c.latitud}°</p>
                    <p>Longitud: {c.longitud}°</p>
                </div>
            </div>
        </div>
    )
}