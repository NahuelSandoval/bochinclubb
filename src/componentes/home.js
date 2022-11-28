import React from "react";
import tesorero from "./fotos/P1010279.JPG"
import comisionDirectiva from "./fotos/SDC16942.JPG"
import presidencia from "./fotos/4.jpeg"
import "./estilos/home.css";
import CarouselEjemplo from "./carousel/carousel";

const Home = () => {
    return (
        <div className="contenido">
            <h2>Nuestro club</h2>
            <main className="principal">
                <div className="griduno">
                    <h3>Tesorero</h3>
                    <section className="seccion uno">
                        <p>Un ejemplo de conducta y trasparencia. Con experiencia y gestión, se lleva a nuestro querido club
                            a
                            un nivel de excelencia</p>
                        <img className="imagenes" src={tesorero} alt="el tesorero" />
                    </section>
                </div>
                <div className="griddos">
                    <h3>Comisión directiva</h3>
                    <section className="seccion dos">
                        <p>Elegido por los socios en ya tres ocaciones, nuestra comisión directiva conjunto a la comunidad
                            barrial, siempre trabajan en actividades sociales en la ciudad</p>
                        <img className="imagenes" src={comisionDirectiva} alt="comision directiva" />
                    </section>
                </div>
                <div className="gridtres">
                    <h3>Presidencia</h3>
                    <section className="seccion tres">
                        <p>Presidencia de Dardo Jorge Sandoval</p>
                        <img className="imagenes" src={presidencia} alt="presidente" />
                    </section>
                </div>
                <aside className="aside">
                    <h3>Actividades</h3>
                    <p>Orgullo dock sud, Orgullo avellaneda y torneo de bochas entre otras actividades</p>
                    <CarouselEjemplo />
                </aside>
            </main>
        </div>
    )
}
export default Home;