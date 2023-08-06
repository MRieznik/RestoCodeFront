import Home from "../../Pages/HOME/Home";
import Reservas from "../../Pages/RESERVAS/reservas";
import Nosotros from "../../Pages/NOSOTROS/Nosotros";
import Registro from "../../Pages/REGISTRO/Registro";
import Galeria from "../../Pages/GALERIA/Galeria";
import Error404 from "../../Pages/ERROR404/error404"; 
import Administracion from "../../Pages/ADMINISTRADOR/Administracion";
import { Navigate, Route, Routes } from "react-router-dom";
import ModalInicarSesion from "../MODAL INICAR-SESION/ModalInicarSesion";
import { useContext } from "react";
import { UsuariosContext } from "../../context/UsersContext";

const Rutas = () => {
  const { userLogueado } = useContext(UsuariosContext);
  return (
    <>
      <Routes>
        <Route path="/" onClick={<ModalInicarSesion />} element={<Home />} />
        <Route
          path="/reservas" element = {userLogueado ? <Reservas /> : <Navigate to="/"/>}
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
        <Route path="/error404" element={<Error404 />}></Route>
      </Routes>
    </>
  );
};

export default Rutas;
