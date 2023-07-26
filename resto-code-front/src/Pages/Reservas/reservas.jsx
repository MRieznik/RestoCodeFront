import { Form } from "react-bootstrap/";
import "./Reservas.css";

const Reservas = () => {
  return (
    <>
      <main className="contenedorPrincipalReserva">
        <div className="contenedorFormularioReserva">
          <div className="tituloFormReserva">
            <h2>No esperes en la fila</h2>
            <h4>¡Reserva y entrá directo a la diversión!</h4>
          </div>
          <Form className="formularioReserva" id="formReserva">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputFechaReserva" className="labelReservas">
                Fecha de reserva
              </Form.Label>
              <Form.Control
                className="inputReservas"
                id="inputFechaReserva"
                name="fecha"
                type="date"
                // value={formData.fecha}
                // onChange={handleChange}
                placeholder="Ingrese su nombre de usuario"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              // controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="labelReservas" htmlFor="inputHoraReserva">
                Hora de reserva
              </Form.Label>
              <Form.Control
                className="inputReservas"
                id="inputHoraReserva"
                name="hora"
                type="time"
                // value={formData.hora}
                // onChange={handleChange}
                placeholder="Ingrese su nombre de usuario"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              // controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="labelReservas" htmlFor="inputInvitados">
                Cantidad de invitados
              </Form.Label>
              <Form.Control
                className="inputReservas"
                id="inputInvitados"
                name="invitados"
                type="number"
                // value={formData.invitados}
                // onChange={handleChange}
                placeholder="Ingrese numero de invitados"
                min="1"
                max="30"
                title="Cantidad maxima de personas: 30
                    "
                required
              />
            </Form.Group>
            <Form.Label className="labelReservas" htmlFor="inputComentarios">
              ¿Qué debemos saber sobre tu evento?
            </Form.Label>
            <textarea
              className="infoEvento mb-3"
              id="inputComentarios"
              name="comentarios"
              type="text"
              // value={formData.comentarios}
              // onChange={handleChange}
              minLength={5}
              maxLength={50}
              title="Ingrese al menos 5 caracteres"
              required
              // aria-label="With textarea"
            />
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
