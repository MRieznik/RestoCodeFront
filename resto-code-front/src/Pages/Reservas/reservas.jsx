import { Form } from "react-bootstrap/";
import "./Reservas.css";
import { useState } from "react";
import Swal from 'sweetalert2'



const Reservas = () => {
  const [formReserva, setFormReserva] = useState({
    fecha: "",
    hora: "",
    invitados: "",
    comentarios: "",
  });

  const [errorFecha, setErrorFecha] = useState("");
  const [errorHora, setErrorHora] = useState("");
  const [errorInvitados, setErrorInvitados] = useState("");
  const [errorComentarios, setErrorComentarios] = useState("");
  const [camposVacios, setCamposVacios] = useState("");

  const handleChange = (e) => {
    setFormReserva({ ...formReserva, [e.target.name]: e.target.value });
  };

  const handleBlurFecha = (e) => {
    if (e.target.name === 'fecha') {
      const fecha = new Date(e.target.value);
      const fechaActual = new Date();
  
      // Quitamos las horas, minutos y segundos de las fechas antes de comparar
      fecha.setHours(0, 0, 0, 0);
      fechaActual.setHours(0, 0, 0, 0);
  
      if (fecha < fechaActual) {
        setErrorFecha('Elija una fecha válida');
      } else {
        setErrorFecha('');
      }
    }
  };



  const handleBlurHora = (e) => {
    if (e.target.name === "hora") {
      const hora = e.target.value;
      const horaMinima = new Date(`2000-01-01T10:00`); 
      const horaMaxima = new Date(`2000-01-01T23:00`); 

      const valorHora = new Date(`2000-01-01T${hora}`);

      if (valorHora <horaMinima || valorHora > horaMaxima) {
        setErrorHora("Horarios de reservas validos: de 10 a 23");
      } else {
        setErrorHora("");
      }
    }
  };

  const handleBlurInvitados = (e) => {
    if (e.target.name === "invitados") {
      const invitados = e.target.value;
      const invitadosMin = 1;
      const invitadosMax = 30;
      if (invitados < invitadosMin || invitados > invitadosMax) {
        setErrorInvitados("¡Debe asistir al menos una persona!");
      } else {
        setErrorInvitados("");
      }
    }
  };

  const handleBlurComentarios = (e) => {
    if (e.target.name === "comentarios") {
      const comentarios = e.target.value;

      if (comentarios.length < 5 || comentarios.length > 50) {
        setErrorComentarios("¡Danos mas detalles de tu reserva!");
      } else {
        setErrorComentarios("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormReserva({
      fecha: "",
      hora: "",
      invitados: "",
      comentarios: "",
    });
    Swal.fire({
      icon: 'success',
      title: '¡Listo!',
      text: 'Su reserva ha sido confirmada',
      confirmButtonColor: '#1d0c20',

    })

    formularioReserva.reset();
  };

  return (
    <>
      <main className="contenedorPrincipalReserva">
        <div className="contenedorFormularioReserva">
          <div className="tituloFormReserva">
            <h2>No esperes en la fila</h2>
            <h4>¡Reserva y entrá directo a la diversión!</h4>
          </div>
          <Form
            onSubmit={handleSubmit}
            className="formularioReserva"
            id="formularioReserva"
          >
            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputFechaReserva" className="labelReservas">
                Fecha de reserva
              </Form.Label>
              <Form.Control
                className="inputReservas"
                id="inputFechaReserva"
                name="fecha"
                type="date"
                value={formReserva.fecha}
                onChange={handleChange}
                onBlur={handleBlurFecha}
                min={new Date().toISOString().split("T")[0]}
                required
              />
              {errorFecha && <div className="errorMensaje">{errorFecha}</div>}
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label className="labelReservas" htmlFor="inputHoraReserva">
                Hora de reserva
              </Form.Label>
              <Form.Control
                className="inputReservas"
                id="inputHoraReserva"
                name="hora"
                type="time"
                value={formReserva.hora}
                onChange={handleChange}
                onBlur={handleBlurHora}
                required
              />
              {errorHora && <div className="errorMensaje">{errorHora}</div>}
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label className="labelReservas" htmlFor="inputInvitados">
                Cantidad de invitados
              </Form.Label>
              <Form.Control
                className="inputReservas"
                id="inputInvitados"
                name="invitados"
                type="number"
                value={formReserva.invitados}
                onChange={handleChange}
                onBlur={handleBlurInvitados}
                placeholder="Ingrese numero de invitados"
                min="1"
                max="30"
                title="Cantidad maxima de personas: 30
                    "
                required
              />
              {errorInvitados && (
                <div className="errorMensaje">{errorInvitados}</div>
              )}
            </Form.Group>
            <Form.Label className="labelReservas" htmlFor="inputComentarios">
              ¿Qué debemos saber sobre tu evento?
            </Form.Label>
            <textarea
              className="infoEvento"
              id="inputComentarios"
              name="comentarios"
              type="text"
              value={formReserva.comentarios}
              onChange={handleChange}
              onBlur={handleBlurComentarios}
              minLength={5}
              maxLength={50}
              title="Ingrese al menos 5 caracteres"
              required
              />
              {errorComentarios && (
               <div className="errorMensaje">{errorComentarios}</div>
              )}
            <button type="submit" className="botonReserva">
              Confirmar
            </button>
          </Form>
        </div>
        <div className="contenedorImgReserva"></div>
      </main>
    </>
  );
};

export default Reservas;
