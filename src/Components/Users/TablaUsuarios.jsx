import { useContext, useState } from "react";
import { UsuariosContext } from "../../context/UsersContext";
import Swal from "sweetalert2";
import { Table, Modal } from "react-bootstrap";
import FormUpdateUsuarios from "./FormUpdateUsuarios";

const TablaUsuarios = () => {
  const { users, deleteUser } = useContext(UsuariosContext);
  const [editUser, setEditUser] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (user) => {
    console.log(user, "Usuario desde tabla ususarios.");
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
        users.map((user) => {
          return (
            <>
              <Table responsive>
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
                  <tr>
                    <td>{user.nombre}</td>
                    <td>{user.apellido}</td>
                    <td>{user.edad}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="btn btn-warning m-1"
                        onClick={() => handleEdit(user)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => handleDelete(user.id)}
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Usuarios</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FormUpdateUsuarios editUser={editUser} handleClose={handleClose} />
                </Modal.Body>
              </Modal>
            </>
          );
        })
      )}
    </>
  );
};

export default TablaUsuarios;
