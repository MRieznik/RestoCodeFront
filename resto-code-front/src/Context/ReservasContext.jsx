import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const ReservasContext = createContext(); //creamos el contexto

// eslint-disable-next-line react/prop-types
const ReservContext = ({ children }) => {
  //vamos a poner todo el crud de productos
  const [reservas, setReservas] = useState([]);

  //get ----> trae todas las reservas
  const getReservas = async () => {
    try {
      const response = await axios.get(
        "https://restocode.onrender.com/api/reservas"
      );
      setReservas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //put ----> edita una reserva

  const updateReserva = async (reserva) => {
    try {
      await axios.put(
        `https://restocode.onrender.com/api/actualizarReserva/${reserva._id}`,
        reserva
      );
      await getReservas();
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "No se puede reservar en un dia/horario anterior al actual!",
            confirmButtonColor: "#C73333",
            background: "#31302F",
            color: "white",
            backdrop: `rgba(0,0,14,0.4)`,
          });
        } else if (error.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Ya existe una reserva con la misma fecha y hora!",
            confirmButtonColor: "#C73333",
            background: "#31302F",
            color: "white",
            backdrop: `rgba(0,0,14,0.4)`,
          });
        }
      }
    }
  };

  //delete ----> borra una reserva

  const deleteReserva = async (id) => {
    try {
      const response = await axios.delete(
        `https://restocode.onrender.com/api/eliminarReserva/${id}`
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Reserva Cancelada",
          showConfirmButton: false,
          timer: 1500,
          background: "#31302F",
          color: "white",
          backdrop: `rgba(0,0,14,0.4)`,
        });
      }
      const deleteReserva = reservas.filter((reserva) => reserva._id !== id);
      setReservas(deleteReserva);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservas();
  }, []);

  return (
    <ReservasContext.Provider
      value={{
        reservas,
        setReservas,
        updateReserva,
        deleteReserva,
      }}
    >
      {children}
    </ReservasContext.Provider>
  );
};

export default ReservContext;
