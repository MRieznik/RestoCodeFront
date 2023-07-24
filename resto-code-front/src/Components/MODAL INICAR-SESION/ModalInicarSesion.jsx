import { Col, Container, Row, Button } from "react-bootstrap";

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
