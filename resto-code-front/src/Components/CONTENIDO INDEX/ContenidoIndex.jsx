import "./ContenidoIndex.css";

const ContenidoIndex = () => {
  return (
    <div className="contendor-botonReserva-imagenes">
      <div className="contenedorBotonReservar">
        <div className="tituloRestoCode">
          <h1>Resto Code</h1>
          <div className="restoBar">
            <h2>Restobar</h2>
          </div>
        </div>
        <button className="botonReservarIndex">¡Reserva aqui!</button>
      </div>
      <div className="imagenDeFondoIndex">
        <div className="sombraImagenDeFondoIndex"></div>
      </div>
    </div>
  );
};

export default ContenidoIndex;
