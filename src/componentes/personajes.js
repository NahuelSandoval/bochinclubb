import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./estilos/home.css"


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
        <h2 className= "FormExitoso">Cargando personajes ....</h2>
    </div>
);

}
    return (
        <>
            <h2 style={{margin:"2rem"}}>Personajes</h2>
            <Container>
                {personajes ?
                    <Row style={{justifyContent:"space-around"}}>
                        {personajes.map((personaje, index) => (
                            <Col sm={4} key={index} className="caja" style={{margin:"1rem"}}>
                                <img style={{width: "80%",  margin: "50px"}} src={personaje.image} alt="personaje" />
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