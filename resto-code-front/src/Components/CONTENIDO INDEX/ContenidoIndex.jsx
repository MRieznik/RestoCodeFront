import "./ContenidoIndex.css";
import logotransparente from "C:/Users/Usuario/Desktop/RestoCodeFront/resto-code-front/src/Image/INDEX-IMAGE/logoTransparante.png"

const ContenidoIndex = () => {
  return (
    <main>
        <div className="contenedorPresentacion">
          <div className="contenedorConSombra">
                <header className="headerEnIndex">
                  <div className="nombreDeCerveceria">
                      <h1 className="tituloRestoCodeIndex">Resto code</h1>
                      <img src={logotransparente} alt="" className="logoTransparente" />
                  </div>
                  <div className="fraseYnav">
                  </div>
                </header>
          </div>
        </div>
    </main>
  );
};

export default ContenidoIndex;

  {/* <Header /> */}
      {/* <div className="contendor-botonReserva-imagenes">
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
        </div>
      </div> */}