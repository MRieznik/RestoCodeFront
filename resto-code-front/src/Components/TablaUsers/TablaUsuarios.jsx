import { useContext, useState } from "react";
import { UsuariosContext } from "../../Context/UsersContext";
import Swal from "sweetalert2";
import { Table, Modal } from "react-bootstrap";
import FormUpdateUsuarios from "./FormUpdateUsuarios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TablaUsuarios.css";

const TablaUsuarios = () => {
  const { users, deleteUser } = useContext(UsuariosContext);
  const [editUser, setEditUser] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (user) => {
    console.log(user, "Usuario desde tabla usuarios.");
    setEditUser(user);
    handleShow();
  };

  const handleDelete = (id) => {
    deleteUser(id);
    Swal.fire({
      icon: "success",
      title: "Usuario Eliminado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      {users === undefined ? (
        <h1>No hay usuarios registrados</h1>
      ) : (
        <>
          <Table responsive className="table-dark table-hover text-center">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
                  <td>{user.edad}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="botonEditar m-1"
                      onClick={() => handleEdit(user)}
                    >
                     <FontAwesomeIcon icon="fa-solid fa-pen-to-square" fade size="lg" style={{color: "#ffffff",}} title="Editar Usuario" />
                    </button>
                    <button
                      className="botonDelete m-1"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-trash" fade size="lg" style={{color: "#ffffff",}} title="Eliminar Usuario"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose} className="contenedor-editar">
            <Modal.Header closeButton className="headerEditar" >
              <Modal.Title>Editar Usuarios</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bodyEditar" >
              <FormUpdateUsuarios editUser={editUser} handleClose={handleClose} />
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default TablaUsuarios;
