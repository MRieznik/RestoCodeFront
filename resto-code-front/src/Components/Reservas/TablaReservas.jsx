import { useContext, useState } from "react";
import { ReservasContext } from "../../Context/ReservasContext";
import Swal from "sweetalert2";
import { Table, Modal } from "react-bootstrap";
import FormUpdateReserva from "./FormUpdateReserva";

const TablaReservas = () => {
  const { reservas, deleteReserva } = useContext(ReservasContext);
  const [editReserva, setEditReserva] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (user) => {
    console.log(user, "Reserva desde tabla reservas.");
    setEditReserva(user);
    handleShow();
  };

  const handleDelete = (id) => {
    deleteReserva(id);
    Swal.fire({
      icon: "success",
      title: "Reserva Cancelada",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      {reservas.length > 0 ? (
        <Table responsive className="tablaReservas">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Comensales</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>
                  {reserva.nombre} {reserva.apellido}
                </td>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.comensales}</td>
                <td>
                  <button
                    className="btn btn-success m-1"
                    onClick={() => handleEdit(reserva)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => handleDelete(reserva.id)}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>No hay reservas registradas</h1>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Reservas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
