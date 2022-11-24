import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Salon from "../fotos/SDC16099.JPG"
import Torneo from "../fotos/FBC 033.jpg"
import Festejos from "../fotos/SDC16647.JPG"
import FestejosContemporaneos from "../fotos/boyu 9.jpg"
import "../estilos/home.css"

function CarouselEjemploDos() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenescarru"
                    src={Salon}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p className="CarouselText" >Nuestro salón</p>
                    <p className="CarouselText" >Salón de usos multiples</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenescarru"
                    src={Torneo}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <p className="CarouselText">Torneo de bochas</p>
                    <p className="CarouselText">Demostración de los socios</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenescarru"
                    src={Festejos}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p className="CarouselText">Fiesta de socios</p>
                    <p className="CarouselText">Festejos fin de año</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagenescarru"
                    src={FestejosContemporaneos}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p className="CarouselText">Fiesta de socios 1950</p>
                    <p className="CarouselText">Festejos en el FBC desde siempre</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselEjemploDos;