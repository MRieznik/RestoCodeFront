import { Col, Container, Row } from "react-bootstrap";
import TablaUsuarios from "../Components/TablaUsers/TablaUsuarios";
import TablaReservas from "../Components/TablaReservas/TablaReservas";
import "./Administrador.css";

const Administracion = () => {
  return (
    <div className="containerAdmin">
      <h1 className="tituloAdministrador py-3">Administracion</h1>      
      <Container>
      <hr></hr>
        <Row>
          <Col>
            <h3 className="tituloTablaReservas">Reservas</h3>
            <TablaReservas />
          </Col>
        </Row>     
        <hr></hr>
        <Row>
          <Col>
            <h3 className="tituloTablaReservas">Usuarios</h3>
            <TablaUsuarios />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Administracion;
