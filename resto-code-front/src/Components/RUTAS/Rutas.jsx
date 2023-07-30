import Home from "../../Pages/HOME/Home";
import Reservas from "../../Pages/RESERVAS/Reservas";
import Nosotros from "../../Pages/NOSOTROS/Nosotros";
import Registro from "../../Pages/REGISTRO/Registro";
import Galeria from "../../Pages/GALERIA/Galeria";
import Administracion from "../../Pages/ADMINISTRADOR/Administracion";
import { Route, Routes } from "react-router-dom";
import ModalInicarSesion from "../MODAL INICAR-SESION/ModalInicarSesion";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" onClick={<ModalInicarSesion />} element={<Home />} />
        <Route
          path="/reservas"
          onClick={<ModalInicarSesion />}
          element={<Reservas />}
        />
        <Route
          path="/galeria"
          onClick={<ModalInicarSesion />}
          element={<Galeria />}
        />
        <Route
          path="/nosotros"
          onClick={<ModalInicarSesion />}
          element={<Nosotros />}
        />
        <Route
          path="/registro"
          onClick={<ModalInicarSesion />}
          element={<Registro />}
        />
        <Route path="/administracion" element={<Administracion />} />
      </Routes>
    </>
  );
};

export default Rutas;
