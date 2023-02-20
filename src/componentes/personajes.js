import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Personajes = () => {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
            .then((response) => response.json())
            .then((personajes) => setPersonajes(personajes))
}
    );

    return (
        <>
            <div>personajes</div>
            <Container>
                {personajes ?
                    <Row>
                        {personajes.map((personaje, index) => (
                            <Col sm={4} key={index}>
                                <img style={{ width: "80%" }} src={personaje.image} alt="personaje" />
                                <h3>{personaje.name}</h3>
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