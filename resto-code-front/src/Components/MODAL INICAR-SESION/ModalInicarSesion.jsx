import { useState, useContext } from "react";
import { Col, Container, Row, Button, Nav } from "react-bootstrap";
import { UsuariosContext } from "../../Context/UsersContext";
import "./ModalInicarSesion.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ModalInicarSesion = () => {
  const [email, setEmail] = useState();
  const [contrasenia, setContrasenia] = useState();

  const { users, login } = useContext(UsuariosContext);

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, contrasenia);
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
                  placeholder="Ingresa tu correo"
                  title="Use el formato ejemplo@ejemplo.com"
                  required
                  id="email"
                  name="email"
                  aria-describedby="producto"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  maxLength="76"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="contraseña"
                  className="form-label textoLabelEmail"
                >
                  Contraseña
                </label>
                <div className="d-flex flex-row">
                  <input
                    /* type="password" */
                    type={showPassword ? "text" : "password"}
                    className="form-control inputIniciarSesion"
                    minLength={8}
                    maxLength={12}
                    pattern="[A-Za-z0-9]+"
                    placeholder="Ingresa tu contraseña"
                    name="contraseña"
                    onChange={(e) => setContrasenia(e.target.value)}
                    value={contrasenia}
                    required
                  />
                  <div className="">
                    <button
                      type="button"
                      className="btn btn-outline-secondary tamanioImpustRegistro"
                      onClick={toggleShowPassword}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                variant="outline-success"
                className="botonIniciarSesion"
              >
                Ingresar
              </Button>

              <Nav.Link href="/registro" className="mt-2">
                <h6 className="IraRegistroLogin">
                  ¿No tienes una cuenta? Registrate
                </h6>
              </Nav.Link>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ModalInicarSesion;
