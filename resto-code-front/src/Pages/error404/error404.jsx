import "./error404.css";
import imagen from "../../Image/Error404.png";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const Error404 = () => {
  return (
    <body className="error404 ">
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center ">
          <div className="imagen404">
            <h2 class="display-1 fw-bold text-white texto404 ">404</h2>
            <p class="fs-3 text-white">
              <span class="text-danger">Opps!</span> Página no encontrada.
            </p>
            <p class="text-white">
              Lo siento, la página que estás buscando no se pudo encontrar.
            </p>
            <a href="" className="btn boton-error">
              Volver a la página principal
            </a>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Error404;
