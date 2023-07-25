import { Col, Container, Row } from "react-bootstrap";
import TablaUsuarios from "../components/users/TablaUsuarios";
import TablaReservas from "../components/reservas/TablaReservas";
import "./Administrador.css";

const Administracion = () => {
  return (
    <div className="containerAdmin">
      <h1 className="tituloAdministrador py-3">Administracion</h1>
      <Container>
        <Row>
          <Col>
            <h3 className="tituloTablaReservas">Tabla de Reservas</h3>
            <TablaReservas />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h3 className="tituloTablaReservas">Tabla de Usuarios</h3>
            <TablaUsuarios />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Administracion;
