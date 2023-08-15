import "./error404.css";
import imagenHamburugesaMordida from "../../Image/ERROR404/hamburguesaMordida.png";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigation = useNavigate();

  return (
    <>
      <main className="contenedorError">
        <div className="contenedor">
          <div className="four">
            <h2>4</h2>
          </div>
          <div className="circle">
            <img
              src={imagenHamburugesaMordida}
              alt="Imagen mordida de hamburguesa"
              srcset=""
            />
          </div>
          <div className="four">
            <h2>4</h2>
          </div>
          <div className="desc">
            <h4>PAGINA NO ENCONTRADA</h4>{" "}
            <button
              className="button-arounder buttonError"
              onClick={() => {
                navigation("/");
              }}
            >
              {" "}
              Volver al inicio
            </button>
          </div>
        </div>
        <div className="buttons-container"></div>
      </main>
    </>
  );
};

export default Error404;
