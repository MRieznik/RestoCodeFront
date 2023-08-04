import { useState, useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { UsuariosContext } from "../../context/UsersContext";
import "./ModalInicarSesion.css";
import Swal from "sweetalert2";


const ModalInicarSesion = () => {
  const [email, setEmail] = useState();
  const [contrasenia, setContrasenia] = useState();

  const { users, login } = useContext(UsuariosContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si el usuario está en la lista de usuarios (users)
    const usuarioValido = users.some(user => user.email === email);

    if (!usuarioValido) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Usuario y/o contraseña incorrectos!",
        confirmButtonColor: "#C73333",
        background: "#31302F",
        color: "white",
        backdrop: `rgba(0,0,14,0.4)`,
      });  
      setEmail("");
      setContrasenia("");     
      return; 
  }else{
    login(email,contrasenia); 
    }    
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label textoLabelEmail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control inputIniciarSesion"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu correo"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"
                  title="Use el formato ejemplo@ejemplo.com"
                  required
                  id="email"
                  name="email"
                  aria-describedby="producto"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="contraseña"
                  className="form-label textoLabelEmail"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control inputIniciarSesion"
                  //   value={contraseña}
                  //   onChange={(e) => setContraseña(e.target.value)}
                  minLength={8}
                  maxLength={12}
                  pattern="[A-Za-z0-9]+"
                  placeholder="Ingresa tu contraseña"
                  name="contraseña"
                  onChange={(e) => setContrasenia(e.target.value)}
                  value={contrasenia}
                  required
                />
              </div>
              <Button
                type="submit"
                variant="outline-success"
                className="botonIniciarSesion"
              >
                Ingresar
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ModalInicarSesion;
