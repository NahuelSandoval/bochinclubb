import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CircleLoader from "react-spinners/CircleLoader";

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
    <div className= "FormExitoso"> 
        <h2>Cargando personajes ....</h2>
        <CircleLoader color="rgba(102, 118, 115, 1)" size={70} />
    </div>
);

}
    return (
        <>
            <h2 style={{margin:"2rem"}}>Personajes</h2>
            <Container>
                {personajes ?
                    <Row style={{justifyContent:"space-around", width: "100%"}}>
                        {personajes.map((personaje, index) => (
                            <Col sm={4} key={index} className="caja" style={{margin:"1rem", width:"200px"}}>
                                <img style={{width: "80%",  margin: "20px"}} src={personaje.image} alt="personaje" />
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