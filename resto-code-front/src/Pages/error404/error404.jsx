import "./error404.css";
import imagen from "../../Image/Error404.png";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const Error404 = () => {
  return (
    <body className="error404 ">
      <div class="d-flex align-items-center justify-content-center ">
        
          <div className="imagen404 "></div>
          <div className="text-center position-absolute mt-3 m">
            <h2 class="display-1 fw-bold text-white texto404 ">404</h2>
            <p class="fs-3 text-white fw-bold">
              <span class="text-danger fw-bold">Opps!</span> Página no encontrada.
            </p>
            <p class="text-white">
              Lo siento, la página que estás buscando no se pudo encontrar.
            </p>
            <a href="" className="btn boton-error">
              Volver a la página principal
            </a>
        </div>
      </div>
    </body>
  );
};

export default Error404;
