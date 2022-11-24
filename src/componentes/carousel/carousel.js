import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import EventoMuni from "../fotos/SDC10597.JPG"
import Amistosos from "../fotos/FBC 003.jpg"
import FiestaSocios from "../fotos/BRISKI 2.jpg"
import "../estilos/home.css"

function CarouselEjemplo() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenescarru"
                    src={EventoMuni}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p className="CarouselText" >Nuestra comunidad vecinal</p>
                    <p className="CarouselText" >Evento conjunto con la municipalidad</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenescarru"
                    src={Amistosos}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <p className="CarouselText">Torneo de bochas</p>
                    <p className="CarouselText">Amistosos con otros clubes</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenescarru"
                    src={FiestaSocios}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p className="CarouselText">Fiesta de socios</p>
                    <p className="CarouselText">Festejos en el aniversario de Dock Sud</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselEjemplo;