import "./error404.css";
import imagenHamburugesaMordida from "../../Image/ERROR404/hamburguesaMordida.png"
import homero404 from "../../Image/ERROR404/homeroError404.png"
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";


const Error404 = () => {
  return (
    <>
    <div className="error404">
      <div className="d-flex align-items-center justify-content-center container-fluid ">

          <div className="text-center position-absolute mt-2">
            <h1 className="display-1 fw-bold text-white texto404 ">4<img src={imagenHamburugesaMordida} alt="Imagen de hamburguesa mordida" className="imagen404 " />4</h1>
            <p className="fs-3 text-white fw-bold">
              <span className="text-danger fw-bold">Opps!</span> Página no encontrada.
            </p>
            <p className="text-white">
              Lo siento, la página que estás buscando no se pudo encontrar.
            </p>
            <a href="" className="btn boton-error" alt="boton de volver a inicio">
              Volver a la página principal
            </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Error404;
