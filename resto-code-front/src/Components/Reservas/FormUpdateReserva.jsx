import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReservasContext } from "../../Context/ReservasContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const FormUpdateReserva = ({ editReserva, handleClose }) => {
  const [reserva, setReserva] = useState(editReserva);

  const { updateReserva } = useContext(ReservasContext);

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateReserva(reserva);
    Swal.fire({
      icon: "success",
      title: "Reserva Editada",
      showConfirmButton: false,
      timer: 1500,
    });
    handleClose();
  };


  return (
    <>
      <Container>
      
        <Row>
          <Col>
            <form onSubmit={handleEdit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={reserva.nombre}
                  onChange={handleChange}
                  name="nombre"
                  aria-describedby="nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={reserva.apellido}
                  onChange={handleChange}
                  name="apellido"
                  aria-describedby="apellido"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fecha" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={reserva.fecha}
                  onChange={handleChange}
                  name="fecha"
                  aria-describedby="fecha"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="hora" className="form-label">
                  Hora
                </label>
                <input
                  type="time"
                  className="form-control"
                  value={reserva.hora}
                  onChange={handleChange}
                  name="hora"
                  aria-describedby="hora"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="comensales" className="form-label">
                  Comensales
                </label>
                <input
                  type="number"
                  min = "1"
                  className="form-control"
                  value={reserva.comesales}
                  onChange={handleChange}
                  name="comensales"
                  aria-describedby="comensales"
                />
              </div>

              <Button type="submit" variant="outline-success">
                {" "}
                Editar Reserva{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormUpdateReserva;
