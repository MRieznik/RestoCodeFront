import Home from "../../Pages/HOME/Home";
import Reservas from "../../Pages/RESERVAS/reservas";
import Nosotros from "../../Pages/NOSOTROS/Nosotros";
import Registro from "../../Pages/REGISTRO/Registro";
import Galeria from "../../Pages/GALERIA/Galeria";
import Error404 from "../../Pages/ERROR404/error404";
import Administracion from "../../Pages/ADMINISTRADOR/Administracion";
import { Route, Routes, Navigate } from "react-router-dom";
import ModalInicarSesion from "../MODAL INICAR-SESION/ModalInicarSesion";

const Rutas = () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("user"));
  const esAdmin = usuarioLogueado
    ? usuarioLogueado.rolUsuario === "admin"
    : false;

  return (
    <>
      <Routes>
        <Route path="/" onClick={<ModalInicarSesion />} element={<Home />} />
        <Route
          path="/reservas"
          element={usuarioLogueado ? <Reservas /> : <Navigate to="/error404" />}
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
        <Route
          path="/administracion"
          element={esAdmin ? <Administracion /> : <Navigate to="/error404" />}
        />
        <Route path="/error404" element={<Error404 />}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default Rutas;
