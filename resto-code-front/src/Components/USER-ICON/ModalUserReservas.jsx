import { useContext } from "react";
import { ReservasContext } from "../../Context/ReservasContext";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalUserReservas = () => {
  const { reservas, deleteReserva } = useContext(ReservasContext);

  const usuarioLogueado = JSON.parse(localStorage.getItem("user"));
  const userReserva = reservas
    ? reservas.filter(
        (reserva) =>
          reserva.nombre === usuarioLogueado.nombre &&
          reserva.apellido === usuarioLogueado.apellido
      )
    : [];
  console.log(userReserva);

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
        Swal.fire({
          icon: "success",
          title: "Reserva Cancelada",
          showConfirmButton: false,
          timer: 1500,
          background: "#31302F",
          color: "white",
          backdrop: `rgba(0,0,14,0.4)`,
        });
      } else if (result.isDenied) {
        return;
      }
    });
  };

  return (
    <>
      {userReserva.length <= 0 ? (
        <h3>No hay reservas registradas a tu nombre!</h3>
      ) : (
        <Table responsive className="table-dark table-hover text-center tabla">
          <thead className="headTabla">
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Invitados</th>
              <th>Cancelar</th>
            </tr>
          </thead>
          <tbody>
            {userReserva.map((reserva) => (
              <tr key={reserva.id}>
                <td data-label="Fecha">{reserva.fecha}</td>
                <td data-label="Hora">{reserva.hora}</td>
                <td data-label="Comensales">{reserva.invitados}</td>
                <td data-label="Acciones">
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
      )}
    </>
  );
};

export default ModalUserReservas;
