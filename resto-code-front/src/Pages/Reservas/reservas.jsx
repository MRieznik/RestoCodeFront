// import Bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline"
import React from "react";
import {
  Form,
  Button,
} from "react-bootstrap/";
import "./reservas.css";

const Reservas = () => {
  return (
    <>
    <main className="contenedorPrincipalReserva">
      <div className="contenedorFormularioReserva">
        <div className="tituloFormReserva">
          <h2>No esperes en la fila</h2>
          <h4>¡Reserva y entrá directo a la diversión!</h4>
        </div>
      <Form className="formularioReserva" id="formReserva">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label htmlFor="inputFechaReserva" className="labelReservas">
                    Fecha de reserva
                  </Form.Label>
                  <Form.Control
                    className="inputReservas"
                    id="inputFechaReserva"
                    name="fechaReserva"
                    type="date"
                    placeholder="Ingrese su nombre de usuario"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="labelReservas" htmlFor="inputHoraReserva">
                    Hora de reserva
                  </Form.Label>
                  <Form.Control
                    className="inputReservas"
                    id="inputHoraReserva"
                    name="horaReserva"
                    type="time"
                    placeholder="Ingrese su nombre de usuario"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="labelReservas" htmlFor="inputInvitados">
                    Cantidad de invitados
                  </Form.Label>
                  <Form.Control
                    className="inputReservas"
                    id="inputInvitados"
                    name="numInvitados"
                    type="number"
                    placeholder="Ingrese numero de invitados"
                    min="0"
                    max="30"
                    title="Cantidad maxima de personas: 30"
                    required
                  />
                </Form.Group>
                <Form.Label className="labelReservas" htmlFor="inputComentarios">¿Qué debemos saber sobre tu evento?</Form.Label>
                <textarea
                  className="infoEvento mb-3"
                  id="inputComentarios"
                  name="comentariosReservas"
                  type="text"
                  minLength={5}
                  maxLength={50}
                  title="Ingrese al menos 5 caracteres"
                  required
                  // aria-label="With textarea"
                />
                <Button className="botonReserva">Confirmar</Button>
              </Form>

      </div>
      <div className="contenedorImgReserva">
      </div>
    </main>


      {/* <Container fluid className="pageReserva">
        <Row>
        <Col lg={6}>
          <Card className="cardReserva">
            <Card.Body>
              <Card.Title className="tituloCardReservas">
                <h1>RESERVAS</h1>
              </Card.Title>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="labelReservas">
                    Nombre de usuario
                  </Form.Label>
                  <Form.Control
                    className="inputReservas"
                    type="text"
                    placeholder="Ingrese su nombre de usuario"
                  />
                </Form.Group>
                <Form.Label className="labelReservas">
                  Cantidad de comensales
                </Form.Label>
                <Form.Select
                  className="inputReservas"
                  aria-label="Default select example"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
                <p></p>
                <Form.Label className="labelReservas">Comentarios</Form.Label>
                <Form.Control
                  className="inputReservas"
                  as="textarea"
                  aria-label="With textarea"
                />
                <p></p>
                <Button className="botonReserva">Confirmar</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <div className="contenedorImgReserva">
          <img
            className="imgReserva"
            src="../src/Image/restocodeimg.jpeg"
            alt=""
          />
          </div>
        </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Reservas;
