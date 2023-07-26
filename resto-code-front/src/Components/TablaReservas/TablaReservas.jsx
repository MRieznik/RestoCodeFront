import { useContext, useState } from "react";
import { ReservasContext } from "../../Context/ReservasContext";
import Swal from "sweetalert2";
import { Table, Modal } from "react-bootstrap";
import FormUpdateReserva from "./FormUpdateReserva";
<<<<<<< HEAD:resto-code-front/src/Components/Reservas/TablaReservas.jsx
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TablaReservas.css";

>>>>>>> f82d1ce4b85e3ffbf6f74519c014cde9b9e73b8d:resto-code-front/src/Components/TablaReservas/TablaReservas.jsx

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
<<<<<<< HEAD
      {reservas.length > 0 ? (
        <Table responsive className="tablaReservas">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Comensales</th>
              <th>Acciones</th>
=======
    {reservas.length > 0 ? (
      <Table responsive className="table-dark table-hover text-center">
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
              <td>{reserva.nombre} {reserva.apellido}</td>
              <td>{reserva.fecha}</td>
              <td>{reserva.hora}</td>
              <td>{reserva.comensales}</td>
              <td>
                <button
                  className="botonEdit m-1"
                  onClick={() => handleEdit(reserva)}
                >
                 <FontAwesomeIcon icon="fa-solid fa-pen-to-square" fade size="lg" style={{color: "#ffffff",}} title="Editar Reserva" />
                </button>
                <button
                  className="botonCancel m-1"
                  onClick={() => handleDelete(reserva.id)}
                >
                <FontAwesomeIcon icon="fa-solid fa-xmark" fade size="xl" style={{color: "#ffffff",}} title="Cancelar Reserva"/>
                </button>
              </td>
>>>>>>> 7ff7a30d85ac643b0f9d72f4bc6090bdfbc731ed
            </tr>
<<<<<<< HEAD:resto-code-front/src/Components/Reservas/TablaReservas.jsx
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
=======
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
        <FormUpdateReserva editReserva={editReserva} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  </>
>>>>>>> f82d1ce4b85e3ffbf6f74519c014cde9b9e73b8d:resto-code-front/src/Components/TablaReservas/TablaReservas.jsx
  );
};

export default TablaReservas;
