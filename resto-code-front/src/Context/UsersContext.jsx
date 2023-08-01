import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const UsuariosContext = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [users, setUsers] = useState();

  //get ----> trae todos los ususarios
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //post ----> crea un usuario

  const addUser = async (user) => {
    try {
      const response = await axios.post("http://localhost:8080/users", user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  //logout----> desloguea el usuario actual
  const logOut = () => {
    Swal.fire({
      icon: "warning",
      title: "Cerrar Sesión?",
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

  //put ----> edita un usuario

  const updateUsers = async (user) => {
    try {
      await axios.put(`http://localhost:8080/users/${user.id}`, user);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  //delete ----> elimina un usuario

  const deleteUser = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      const deleteUser = users.filter((user) => user.id !== id);
      setUsers(deleteUser);
    } catch (error) {
      console.log(error);
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
        addUser,
        updateUsers,
        deleteUser,
        logOut,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsersContext;
