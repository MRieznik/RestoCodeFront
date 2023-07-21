import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const UsuariosContext = createContext()



// eslint-disable-next-line react/prop-types
const UsersContext = ({children}) => {
    const [users, setUsers] = useState();

 //get ----> trae todos los ususarios
    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/users")
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }
 //logout----> desloguea el usuario actual
    const logOut = () => {
        localStorage.removeItem("user")
        window.location.href = "/"
    }

 //put ----> edita un usuario

 const updateUsers = async (user) => {
    try {
      await axios.put(
        `http://localhost:8080/users/${user.id}`, user);
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
        getUsers()
    }, [])




  return (
    <UsuariosContext.Provider 
        value={{
            users, 
            setUsers, 
            deleteUser,
            updateUsers,
            logOut}}>
        {children}
    </UsuariosContext.Provider>
  )
}

<<<<<<< HEAD
export default UsersContext;
=======
export default UsersContext;
>>>>>>> d40bb00c9946f8dbb0c80a799c359294b0af7a1c
