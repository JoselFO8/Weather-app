import estilo from './about.module.css';

export default function About() {

    return (
        <div className={estilo.contenedor}>
            <div className={estilo.about}>
                <div className={estilo.titulo}>
                    <h1>About</h1>
                </div>
                <div className={estilo.parrafo}>
                    <p> The Weather App is an online app that originated in May 2022, with its roots planted in knowledge of the React library in Henry's course. The application connects to external databases to identify the meteorology (weather and climate) of different cities. Its development based in Mosquera-Colombia, is headed by Jose Fernández as lead developer.</p>
                </div>   
            </div>
        </div>
    )
}