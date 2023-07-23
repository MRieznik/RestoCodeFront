import "./ContenidoIndex.css";
import cervezayhamburguesa from "C:/Users/Usuario/Desktop/RestoCodeFront/resto-code-front/src/Image/INDEX-IMAGE/video4.mp4";
import cartacerveza from "C:/Users/Usuario/Desktop/RestoCodeFront/resto-code-front/src/Image/INDEX-IMAGE/cartaDeCervezas.png";

const ContenidoIndex = () => {
  return (
    <main>
      <div className="contendor-botonReserva-imagenes">
        <div className="contenedorBotonReservar">
          <div className="tituloRestoCode">
            <h1>Resto Code</h1>
            <div className="restoBar">
              <h2>Cerveceria</h2>
            </div>
          </div>
          <button className="botonReservarIndex">¡Reserva aqui!</button>
        </div>
        <div className="imagenDeFondoIndex">
          <div className="sombraImagenInicioIndex"></div>
        </div>
      </div>
      <div className="contenedorDeMenu">
        <div className="contendorFrases">
          <h2 className="tituloDePresentacionMenu">
            El tiempo pasa, la cerveza vuela
          </h2>
          <h4 className="mensajeConciencia">Beber con moderacion</h4>
        </div>
        <div className="contendorCerveza">
          <video
            src={cervezayhamburguesa}
            className="cartaMenuDeCervezas"
            autoPlay
            loop
            muted
          ></video>
          <div className="cajaConFrase">
            <h2>¿Te tentaste, verdad?</h2>
            <h3>¡Mira nuestras cartas aqui abajo!</h3>
          </div>
        </div>
        <div className="imagenDeAmbosMenus">
          <div className="menuUno">
            <img src={cartacerveza} alt="" />
          </div>
          <div className="menuDos">
            <img src={cartacerveza} alt="" />
          </div>
        </div>
        <div className="contendorContacto">
              <h2>Contáctanos</h2>
              <h3>No dudas en ponerte en contacto con nosotros</h3>
        </div>
      </div>
    </main>
  );
};

export default ContenidoIndex;
