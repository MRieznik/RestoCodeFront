import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const NavbarRestoCode = () => {




  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">RESTO-CODE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Reservas</Nav.Link>
              <Nav.Link href="#link">Galeria</Nav.Link>
              <Nav.Link href="#link">Inicia Sesion</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Registro</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Sobre Nosotros
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>




      <h1>NAVBAR</h1>
    </>
  )
}

export default NavbarRestoCode