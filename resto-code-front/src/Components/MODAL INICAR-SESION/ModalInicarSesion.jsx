import { Col, Container, Row, Button } from "react-bootstrap";
import "./ModalInicarSesion.css";

const ModalInicarSesion = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <form>
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
                  pattern="[A-Za-z0-9]+"
                  placeholder="Ingresa tu contraseña"
                  name="contraseña"
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
