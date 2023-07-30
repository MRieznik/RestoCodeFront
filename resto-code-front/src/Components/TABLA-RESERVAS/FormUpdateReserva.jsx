import { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReservasContext } from "../../Context/ReservasContext";
import Swal from "sweetalert2";
import "./TablaReservas.css";

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
      icon: "warning",
      title: "Editar Reserva?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#651F71",
      cancelButtonColor: "#C73333",
      background: "#31302F",
      color: "white",
      backdrop: `rgba(0,0,14,0.4)`,
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
      } else if (result.isDenied) {
        return;
      }
    });
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
                  className="form-control noEdit"
                  value={reserva.nombre}
                  onChange={handleChange}
                  name="nombre"
                  aria-describedby="nombre"
                  disabled
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control noEdit"
                  value={reserva.apellido}
                  onChange={handleChange}
                  name="apellido"
                  aria-describedby="apellido"
                  disabled
                  readOnly
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
                <label htmlFor="invitados" className="form-label">
                  Comensales
                </label>
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  value={reserva.invitados}
                  onChange={handleChange}
                  name="invitados"
                  aria-describedby="invitados"
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline botonEditarModal"
              >
                {" "}
                Editar Reserva{" "}
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormUpdateReserva;
