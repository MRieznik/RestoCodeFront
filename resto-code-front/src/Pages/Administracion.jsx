import { Col, Container, Row } from "react-bootstrap";
import TablaUsuarios from "../components/users/TablaUsuarios";
import TablaReservas from "../components/reservas/TablaReservas";

const Administracion = () => {
  return (
    <>
      <h1 className="text-center">Administracion</h1>
      <Container>
        <Row>
          <Col>
            <h2>Tabla de Reservas</h2>  
            <TablaReservas/>                 
          </Col>         
        </Row>
        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
        <Row>
        <Col>
        <h2>Tabla de Usuarios</h2>
          <TablaUsuarios/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Administracion;
