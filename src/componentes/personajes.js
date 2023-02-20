import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';


const Personajes = () => {

    const [personajes, setPersonajes] = useState([]);
    const [estaCargando, setEstaCargando] = useState(true)

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
            .then((response) => response.json())
            .then((personajes) => {
                setPersonajes(personajes);
                setEstaCargando(false);
            });
                
}
    );
if (estaCargando){
return (
    <div> 
        <h2>Cargando personajes ....</h2>
    </div>
);

}
    return (
        <>
            <h2>Personajes</h2>
            <Container>
                {personajes ?
                    <Row>
                        {personajes.map((personaje, index) => (
                            <Col sm={4} key={index}>
                                <img style={{ width: "80%" }} src={personaje.image} alt="personaje" />
                                <h2>{personaje.name}</h2>
                                <p>{personaje.house}</p>
                            </Col>
                        )
                        )}
                    </Row>
                    : <div> Cargando personajes ....</div>}
            </Container>
        </>
    )
}

export default Personajes