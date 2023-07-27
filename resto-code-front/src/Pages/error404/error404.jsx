import "./Error404.css";
import imagenHamburugesaMordida from "../../Image/ERROR404/hamburguesaMordida.png";
import homero404 from "../../Image/ERROR404/homeroError404.png";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigation = useNavigate();

  return (
    <>
      <main className="contenedorPrincipalError">
        <div className="contenedor404">
          <div className="contenedorHomero">
            <img src={homero404} alt="Homero quejandose" />
          </div>
          <div className="letras404">
            <div className="contenedorLetras404">
              <p className="cuatro">4</p>{" "}
              <img src={imagenHamburugesaMordida} alt="Hamburguesa mordida" />{" "}
              <p className="cuatro">4</p>
            </div>
            <div className="contenedorBoton">
              <button onClick={()=>{
                navigation("/")
              }} className="boton-error">Volver al inicio</button>
            </div>
          </div>
        </div>
        <div className="contenedorTextoError"><h2>¡Se produjo un error!</h2></div>
      </main>
    </>
  );
};

export default Error404;
