import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

export const UsuariosContext = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [users, setUsers] = useState();
  const [userLogueado, setUserLogueado] = useState();

  //get : trae todos los usuarios
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://restocode.onrender.com/api/usuarios"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //post : loguear un usuario
  const login = async (email, contrasenia) => {
    try {
    

      const response = await axios.post(
        "https://restocode.onrender.com/api/login",
        {
          email,
          contrasenia,
        }
      );

      if (response.status === 200) {
        const jwtToken = response.data.data.token;
        const jwtDecode = jwt_decode(jwtToken);

        const user = {
          id: jwtDecode.id,
          nombre: jwtDecode.nombre,
          apellido: jwtDecode.apellido,
          email: jwtDecode.email,
          telefono: jwtDecode.telefono,
          rolUsuario: jwtDecode.rolUsuario,
        };

        localStorage.setItem("user", JSON.stringify(user));
        setUserLogueado(user);

        if (user.rolUsuario === "admin") {
          window.location.href = "/administracion";
        } else if (user.rolUsuario === "usuario") {
          window.location.href = "/reservas";
        }
      }
    } catch (error) {
      if (error.response.status >= 400) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Usuario y/o contraseña incorrectos!",
          confirmButtonColor: "#C73333",
          background: "#31302F",
          color: "white",
          backdrop: `rgba(0,0,14,0.4)`,
        });
      }
    }
  };

  //logout: desloguea el usuario actual
  const logOut = () => {
    Swal.fire({
      icon: "warning",
      title: "¿Cerrar Sesión?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#651F71",
      cancelButtonColor: "#C73333",
      background: "#31302F",
      color: "white",
      backdrop: `rgba(0,0,14,0.4)`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        window.location.href = "/";
      } else if (result.isDenied) {
        return;
      }
    });
  };

  //put : edita un usuario

  const updateUsers = async (updatedUser) => {
   
    try {
      await axios.put(
        `https://restocode.onrender.com/api/updateUser/${updatedUser._id}`,
        updatedUser
      );
      const newUsers = users.map((User) =>
        User._id === updatedUser._id ? updatedUser : User
      );
      setUsers(newUsers);
    } catch (error) {
      console.log(error.response);
    }
  };

  //delete: elimina un usuario

  const deleteUser = async (id) => {

    try {
      const response = await axios.delete(
        `https://restocode.onrender.com/api/deleteUser/${id}`
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Usuario Eliminado",
          showConfirmButton: false,
          timer: 1500,
          background: "#31302F",
          color: "white",
          backdrop: `rgba(0,0,14,0.4)`,
        });
      }
      const newUsers = users.filter((user) => user._id !== id);
      setUsers(newUsers);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "No se puede eliminar! hay una reserva asociada a este usuario.",
            confirmButtonColor: "#C73333",
            background: "#31302F",
            color: "white",
            backdrop: `rgba(0,0,14,0.4)`,
          });
        }
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsuariosContext.Provider
      value={{
        users,
        setUsers,
        getUsers,
        updateUsers,
        deleteUser,
        login,
        logOut,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsersContext;
