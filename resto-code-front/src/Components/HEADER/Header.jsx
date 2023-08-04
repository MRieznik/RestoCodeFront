import { Container, Nav, Navbar, Modal, Dropdown } from "react-bootstrap";
import { useState, useContext } from "react";
import { UsuariosContext } from "../../context/UsersContext";
import logo from "../../Image/HEADER-IMAGE/restoCodeLogo.png";
import ModalInicarSesion from "../MODAL INICAR-SESION/ModalInicarSesion";
import ModalUserReservas from "../USER-ICON/ModalUserReservas";
import UserIcon from "../USER-ICON/UserIcon";
import "./Header.css";


const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [showReservas, setReservas] = useState(false);
  const handleCloseReservas = () => setReservas(false);
  const handleShowReservas = () => setReservas(true);

  const iniciarSesion = () => {
    handleShowModal();
  };

  const tusReservas = () => {
    handleShowReservas();
  };
  const { logOut } = useContext(UsuariosContext);
  const usuarioLogueado = JSON.parse(localStorage.getItem("user"));

 const iniciales = usuarioLogueado ? usuarioLogueado.nombre.split("")[0]+usuarioLogueado.apellido.split("")[0] : console.log("No hay usuario logueado.")
  


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
                  <Nav.Link href="/" className="NavLink">
                    Inicio
                  </Nav.Link>
                  <Nav.Link
                    // href="#link"
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
                    // href="#link"
                    className="NavLink mx-2"
                    onClick={iniciarSesion}
                  >
                    Iniciar sesión
                  </Nav.Link>
                  <Nav.Link href="/registro" className="NavLink mx-2">
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
                  <Nav.Link href="/reservas" className="NavLink">
                    Reservas
                  </Nav.Link>
                  <Nav.Link href="/galeria" className="NavLink">
                    Galeria
                  </Nav.Link>
                  <Nav.Link href="/nosotros" className="NavLink">
                    Nosotros
                  </Nav.Link>
                  {usuarioLogueado.rolUsuario === "admin" ? (
                    <>
                      <Nav.Link href="/administracion" className="NavLink">
                        Administración
                      </Nav.Link>
                    </>
                  ) : (
                    <></>
                  )}
                </Nav>
                <Nav className="contenedor-iniciarSesion-registrarse justify-content-end">                  
                    <Dropdown  className="desplegable">
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="user-icon"
                      >
                        <UserIcon iniciales={iniciales} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropMenu" >
                        <Dropdown.Item href="#/action-1" onClick={tusReservas}>
                          Mis Reservas
                        </Dropdown.Item>                      
                        <Dropdown.Item href="#/action-2" onClick={logOut} >
                         Cerrar Sesión
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Modal
                      show={showReservas}
                      onHide={handleCloseReservas}
                      className="ventanaModalInicarSesion"
                    >
                      <Modal.Header closeButton className="headerModal">
                        <Modal.Title>Tus Reservas</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="bodyModal">
                        <ModalUserReservas handleClose={handleCloseReservas} />
                      </Modal.Body>
                    </Modal>                  
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="ventanaModalInicarSesion"
      >
        <Modal.Header closeButton className="headerModal">
          <Modal.Title>Ingresa tu usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal">
          <ModalInicarSesion handleClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
