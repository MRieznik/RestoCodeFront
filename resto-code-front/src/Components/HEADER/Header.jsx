import { Container, Nav, Navbar, Modal } from "react-bootstrap";
import { useState } from "react";
import logo from "../../Image/HEADER-IMAGE/restoCodeLogo.png";
import ModalInicarSesion from "../MODAL INICAR-SESION/ModalInicarSesion";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const iniciarSesion = () => {
    handleShow();
  };
  return (
    <>
      <Navbar expand="lg" className="headerPrincipal">
        <Container>
          <Navbar.Brand href="/" className="contenedorLogo">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav">
              <Nav.Link href="" className="NavLink">
                Reservar
              </Nav.Link>
              <Nav.Link href="" className="NavLink">
                Galeria
              </Nav.Link>
              <Nav.Link href="" className="NavLink">
                Nosotros
              </Nav.Link>
              <Nav.Link href="" className="NavLink">
                Contacto
              </Nav.Link>
            </Nav>
            <div className="contenedor-iniciarSesion-registrarse">
              <Nav.Link
                href="#link"
                className="NavLink"
                onClick={iniciarSesion}
              >
                Iniciar sesion
              </Nav.Link>
              <Nav.Link href="#link" className="NavLink">
                Registrarse
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={show}
        onHide={handleClose}
        className="ventanaModalInicarSesion"
      >
        <Modal.Header closeButton className="headerModal">
          <Modal.Title>Ingresa tu usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal">
          <ModalInicarSesion handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
