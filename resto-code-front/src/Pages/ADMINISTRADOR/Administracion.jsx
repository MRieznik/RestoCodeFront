import { Col, Container, Row } from "react-bootstrap";
import TablaReservas from "../../Components/TABLA-RESERVAS/TablaReservas";
import TablaUsuarios from "../../Components/TABLA-USERS/TablaUsuarios";

import "./Administrador.css";

const Administracion = () => {
  return (
    <div className="containerAdmin">
      <h1 className="tituloAdministrador pt-3">A d m i n i s t r a c i o n</h1>
      <Container>
        <hr></hr>
        <Row>
          <Col>
            <h3 className="tituloTablaReservas">R e s e r v a s</h3>
            <TablaReservas />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col>
            <h3 className="tituloTablaReservas">U s u a r i o s</h3>
            <TablaUsuarios />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Administracion;
