// import Bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline"
import React from "react";
import {
  Form,
  Card,
  Container,
  Row,
  Col,
  Button,
  CardImg,
} from "react-bootstrap/";
import "./reservas.css";

const Reservas = () => {
  return (
    <>
      {/* <div className="pageReserva d-flex align-items-center justify-content-center container-fluid ">
        <div className="card cardReserva ">
          <div className="card-img" variant="top" src="" />
          <div className="card-body">
            <div className="card-title">
              <h1>RESERVAS</h1>
            </div>
            <div className="card-text">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                />
                <InputGroup.Text id="basic-addon2">
                  @example.com
                </InputGroup.Text>
              </InputGroup>
              <InputGroup size="sm">
                <DropdownButton
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
              </InputGroup>{" "}
              <br></br>
              <InputGroup>
                <InputGroup.Text>With textarea</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
              <br></br>
              <button className="btn botonReserva">Go somewhere</button>
            </div>
          </div>
        </div>
      </div> */}

      <Container className="pageReserva" fluid>
        <Row>
          <Col>
            <Card className="cardReserva">
                <Col>
                  <img
                    className="imgReserva"
                    src="../src/Image/restocodeimg.jpeg"
                    alt=""
                  />
                </Col>
              <Card.Body>
                <Card.Title className="tituloCardReservas">
                  <h1>RESERVAS</h1>
                </Card.Title>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="labelReservas">Nombre de usuario</Form.Label>
                    <Form.Control className="inputReservas" type="text" placeholder="Ingrese su nombre de usuario" />
                  </Form.Group>
                  <Form.Label className="labelReservas">Cantidad de comensales</Form.Label>
                  <Form.Select className="inputReservas" aria-label="Default select example">
                    <option>...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                  <p></p>
                  <Form.Label className="labelReservas">Comentarios</Form.Label>
                  <Form.Control className="inputReservas" as="textarea" aria-label="With textarea" />
                  <p></p>
                  <Button className="botonReserva">Confirmar</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reservas;
