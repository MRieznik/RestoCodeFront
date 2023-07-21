import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { UsuariosContext } from "../../context/UsersContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const FormUpdateUsuarios = ({ editUser, handleClose }) => {
  const [user, setUser] = useState(editUser);

  const { updateUsers } = useContext(UsuariosContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateUsers(user);
    Swal.fire({
      icon: "success",
      title: "Usuario Editado",
      showConfirmButton: false,
      timer: 1500,
    });
    handleClose();
  };

  return (
    <>
      <Container>
      
        <Row>
          <Col>
            <form onSubmit={handleEdit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.nombre}
                  onChange={handleChange}
                  name="nombre"
                  aria-describedby="nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.apellido}
                  onChange={handleChange}
                  name="apellido"
                  aria-describedby="apellido"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edad" className="form-label">
                  Edad
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={user.edad}
                  onChange={handleChange}
                  name="edad"
                  aria-describedby="edad"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleChange}
                  name="email"
                  aria-describedby="email"
                />
              </div>

              <Button type="submit" variant="outline-success">
                {" "}
                Editar Usuario{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormUpdateUsuarios;
