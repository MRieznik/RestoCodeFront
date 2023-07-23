import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Image/HEADER-IMAGE/restoCodeLogo.png";
import "./Header.css";

const Header = () => {
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
              <Nav.Link href="#link" className="NavLink">
                Iniciar sesion
              </Nav.Link>
              <Nav.Link href="#link" className="NavLink">
                Registrarse
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
