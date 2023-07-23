// import Bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline"
import {
  Form,
  Card,
  Container,
  Row,
  Col,
  Button,
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
              <Card.Img variant="top" src="resto-code-front\src\Pages\Reservas\restocodeimg.jpeg" />
              <Card.Body>
                <Card.Title>
                  <h1>RESERVAS</h1>
                </Card.Title>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Label>Cantidad de comensales</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <p></p>
                  <Form.Label>Comentarios</Form.Label>
                    <Form.Control as="textarea" aria-label="With textarea" />
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
