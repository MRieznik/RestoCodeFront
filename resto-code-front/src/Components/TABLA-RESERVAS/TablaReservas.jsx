import { useContext, useState } from "react";
import { ReservasContext } from "../../Context/ReservasContext";
import Swal from "sweetalert2";
import { Table, Modal } from "react-bootstrap";
import FormUpdateReserva from "./FormUpdateReserva";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TablaReservas.css";

const TablaReservas = () => {
  const { reservas, deleteReserva } = useContext(ReservasContext);
  const [editReserva, setEditReserva] = useState();
  const [filteredReservas, setFilteredReservas] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setFilteredReservas([]); // Limpia los filtros al cerrar el modal
  };
  const handleShow = () => setShow(true);

  const handleEdit = (reserva) => {
    setEditReserva(reserva);
    handleShow();
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Cancelar Reserva?",
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
        deleteReserva(id);
      } else if (result.isDenied) {
        return;
      }
    });
  };

  const handleFilter = (query) => {
    const filtered = reservas.filter(
      (reserva) =>
        reserva.nombre.toLowerCase().includes(query.toLowerCase()) ||
        reserva.apellido.toLowerCase().includes(query.toLowerCase()) ||
        reserva.hora.includes(query) ||
        reserva.fecha.includes(query)
    );
    setFilteredReservas(filtered);
  };
  const displayedReservas = filteredReservas.length > 0 ? filteredReservas : reservas;

  return (
    <>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Filtrar por nombre, apellido, hora o fecha"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>
      {displayedReservas.length > 0 ? (
        <Table responsive className="table-dark table-hover text-center tabla">
          <thead className="headTabla">
            <tr>
              <th>Nombre Completo</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Comensales</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {displayedReservas.map((reserva) => (
              <tr key={reserva._id}>
                <td data-label="Nombre">
                  {reserva.nombre} {reserva.apellido}
                </td>
                <td data-label="Fecha">{reserva.fecha}</td>
                <td data-label="Hora">{reserva.hora}</td>
                <td data-label="Comensales">{reserva.invitados}</td>
                <td data-label="Acciones">
                  <button
                    className="botonEdit m-1"
                    onClick={() => handleEdit(reserva)}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-pen-to-square"
                      fade
                      size="lg"
                      style={{ color: "#ffffff" }}
                      title="Editar Reserva"
                    />
                  </button>
                  <button
                    className="botonCancel m-1"
                    onClick={() => handleDelete(reserva._id)}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-xmark"
                      fade
                      size="xl"
                      style={{ color: "#ffffff" }}
                      title="Cancelar Reserva"
                    />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>No hay reservas registradas</h1>
      )}
      <Modal show={show} onHide={handleClose} className="contenedor-editar">
        <Modal.Header closeButton className="headerEditar">
          <Modal.Title className="text-center">Editar Reservas</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyEditar">
          <FormUpdateReserva
            editReserva={editReserva}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TablaReservas;
