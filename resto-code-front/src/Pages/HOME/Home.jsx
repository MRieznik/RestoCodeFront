import "./Home.css";
import cervezayhamburguesa from "../../Image/INDEX-IMAGE/video4.mp4";
import cartabebidas from "../../Image/INDEX-IMAGE/cartaDeBebidas.png";
import cartacomida from "../../Image/INDEX-IMAGE/cartasDeComidas.png";
import qrwp from "../../Image/INDEX-IMAGE/whatsappQR.png";

const Home = () => {
  return (
    <>
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
          <div className="imagenDeFondoEnResponsive">
            <div className="sombraImagenInicioIndex">
              <div className="tituloRestoCoderResponsive">
                <h1>Resto Code</h1>
                <div className="restoBarResponsive">
                  <h2>Cerveceria</h2>
                </div>
              </div>
                <button className="botonReservarIndexResponsive">
                  ¡Reserva aqui!
                </button>
            </div>
          </div>
        </div>
        <div className="contenedorDeMenu">
          <div className="contendorFrases">
            <h2 className="tituloDePresentacionMenu">
              El tiempo pasa, la cerveza vuela
            </h2>
            <h4 className="mensajeConciencia">Beber con moderacion</h4>
          </div>
          <div className="imagenDeAmbosMenus">
            <div className="menuUno">
              <img src={cartabebidas} alt="" />
            </div>
            <div className="menuDos">
              <img src={cartacomida} alt="" />
            </div>
          </div>
          <div className="contendorFrases">
            <h2 className="tituloDePresentacionMenu">No te comas el verso</h2>
            <h4 className="mensajeConciencia">
              Disfruta cada bocado de nuestras deliciosas hamburguesas
            </h4>
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
              <h3>¡Vení a conocernos!</h3>
            </div>
          </div>
          <div className="contendorContacto" id="Contacto">
            <h2>¿Necesitas comunicarte con nosotros?</h2>
            <h3>¡No dudes en ponerte en contacto!</h3>
            <div className="contendorDeMapaRedesSociales">
              <div className="cajaMapa">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1023709808383!2d-65.20977672374651!3d-26.83669609003341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1sen!2sar!4v1690063836533!5m2!1sen!2sar"
                  title="Mapa de ubicación"
                  className="mapaContacto"
                ></iframe>
                <div className="contenedorRedesContacto">
                  <div className="cajaQrWp">
                    <img src={qrwp} alt="" />
                  </div>
                  <div className="cajaQrIg">
                    {/* <img src={qrig} alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
