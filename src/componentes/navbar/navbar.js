import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet , Link} from 'react-router-dom';



const NavBarExamples = () => {
    return (
        <>
            <Navbar className="navBar" bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to= "/" >Fraternidad Bochin Club</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to= "/" >Home</Nav.Link>
                            <Nav.Link as={Link} to= "/nosotros" >Nosotros</Nav.Link>
                            <Nav.Link as={Link} to= "/tienda" >Tienda</Nav.Link>
                            <Nav.Link as={Link} to= "/nuevaTienda" >Nueva Tienda</Nav.Link>
                            <Nav.Link as={Link} to= "/contacto" >Contacto</Nav.Link>
                            <Nav.Link as={Link} to= "/personajes" >Personajes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

<section>
    <Outlet></Outlet>
</section>

        </>
    )
}

export default NavBarExamples;