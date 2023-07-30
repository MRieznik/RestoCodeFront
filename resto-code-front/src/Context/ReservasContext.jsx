import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ReservasContext = createContext(); //creamos el contexto

// eslint-disable-next-line react/prop-types
const ReservContext = ({ children }) => {
  //vamos a poner todo el crud de productos
  const [reservas, setReservas] = useState([]);

  //get ----> trae todas las reservas
  const getReservas = async () => {
    try {
      const response = await axios.get("http://localhost:8080/reservas");
      console.log(response.data);
      setReservas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //post ----> crea una reserva

  const addReserva = (reserva) => {
    try {
      const response = axios.post("http://localhost:8080/reservas", reserva);
      setReservas([...reservas, response]);
    } catch (error) {
      console.log(error);
    }
  };

  //put ----> edita una reserva

  const updateReserva = async (reserva) => {
    try {
      await axios.put(`http://localhost:8080/reservas/${reserva.id}`, reserva);
      await getReservas();
    } catch (error) {
      console.log(error);
    }
  };

  //delete ----> borra una reserva

  const deleteReserva = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8080/reservas/${id}`);
      const deleteReserva = reservas.filter((reserva) => reserva.id !== id);
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
        addReserva,
        updateReserva,
        deleteReserva,
      }}
    >
      {children}
    </ReservasContext.Provider>
  );
};

export default ReservContext;
