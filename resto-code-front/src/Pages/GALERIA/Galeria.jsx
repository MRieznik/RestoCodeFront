import "./Galeria.css";
import videoextreme from "../../Image/GALERIA-IMAGE/videoPrueba.mp4";
import videocerveza from "../../Image/GALERIA-IMAGE/videocerveza.mp4";
import videopizza from "../../Image/GALERIA-IMAGE/videoPizzaGaleria.mp4";
import videohamburguesasimple from "../../Image/GALERIA-IMAGE/videoHamburGaleria.mp4";

const Galeria = () => {
  return (
    <>
      <main className="contenedorPrincipalDeGaleria">
        <div className="presentacionHamburguesaXtreme">
          <div className="contenedorXtreme">
            <div className="nombreHamburguesaXtreme">
              <h2>X Treme</h2>
              <h4>¡La Mejor Hamburguesa!</h4>
            </div>
            <video
              className="videoXtreme"
              src={videoextreme}
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="imagenPersonaCerveza">
            <div className="sombraPersonaCerveza"></div>
          </div>
          <video
            className="videoCerveza"
            src={videocerveza}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="presentacionGuarnicion">
          <div className="contenedorImagenArosDeCebolla">
            <div className="sombraPersonaCerveza"></div>
          </div>
          <div className="contenedorImagenBastonesDeMuzarella">
            <div className="sombraPersonaCerveza"></div>
          </div>
          <div className="contenedorImagenVariado">
            <div className="sombraPersonaCerveza"></div>
          </div>
          <div className="contenedorFraseGuarniciones">
            <h2>Diferentes Guarniciones</h2>
            <h4>Para acompañar tus comidas</h4>
          </div>
        </div>
        <div className="contenedorBloqueTres">
          <video
            className="videoPizza"
            src={videopizza}
            autoPlay
            loop
            muted
          ></video>
          <div className="contenedorImagenBarra">
            <div className="sombraPersonaCerveza"></div>
          </div>
          <video
            className="videoHamburguesaSimple"
            src={videohamburguesasimple}
            autoPlay
            loop
            muted
          ></video>
          <div className="contenedorTrago">
            <div className="sombraPersonaCerveza"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Galeria;
