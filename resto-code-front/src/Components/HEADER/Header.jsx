import { Container, Nav, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { UsuariosContext } from "../../Context/UsersContext";
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
  const { logOut } = useContext(UsuariosContext);
  const usuarioLogueado = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar expand="lg" className="headerPrincipal">
        <Container>
          <Navbar.Brand href="/" className="contenedorLogo">
            <img src={logo} alt="Logo Resto Code" />
          </Navbar.Brand>
          {usuarioLogueado === null ? (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav">
                  <Nav.Link
                    href="#link"
                    className="NavLink"
                    onClick={iniciarSesion}
                  >
                    Reservar
                  </Nav.Link>
                  <Nav.Link href="/galeria" className="NavLink">
                    Galeria
                  </Nav.Link>
                  <Nav.Link href="/nosotros" className="NavLink">
                    Nosotros
                  </Nav.Link>
                </Nav>
                <div className="contenedor-iniciarSesion-registrarse">
                  <Nav.Link
                    href="#link"
                    className="NavLink"
                    onClick={iniciarSesion}
                  >
                    Iniciar sesión
                  </Nav.Link>
                  <Nav.Link href="/registro" className="NavLink">
                    Registrarse
                  </Nav.Link>
                </div>
              </Navbar.Collapse>
            </>
          ) : (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav">
                  <Nav.Link href="/" className="NavLink">
                    Inicio
                  </Nav.Link>
                  <Nav.Link href="/galeria" className="NavLink">
                    Galeria
                  </Nav.Link>
                  <Nav.Link href="/nosotros" className="NavLink">
                    Nosotros
                  </Nav.Link>
                </Nav>
                <div className="contenedor-iniciarSesion-registrarse">
                  <Nav.Link href="#link" className="NavLink" onClick={logOut}>
                    Cerrar sesión
                  </Nav.Link>
                </div>
              </Navbar.Collapse>
            </>
          )}
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
