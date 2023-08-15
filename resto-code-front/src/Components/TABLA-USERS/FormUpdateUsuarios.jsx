import { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UsuariosContext } from "../../Context/UsersContext";
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
    Swal.fire({
      icon: "warning",
      title: "Editar Usuario?",
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
        updateUsers(user);
        handleClose();
      } else if (result.isDenied) {
        return;
      }
    });
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
                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
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
                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                  onChange={handleChange}
                  name="apellido"
                  aria-describedby="apellido"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Telefono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  value={user.telefono}
                  pattern="[0-9]{7,15}"
                  onChange={handleChange}
                  name="telefono"
                  aria-describedby="telefono"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control noEdit"
                  value={user.email}
                  onChange={handleChange}
                  name="email"
                  aria-describedby="email"
                  disabled
                  readOnly
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline botonEditarModal"
              >
                {" "}
                Editar Usuario{" "}
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormUpdateUsuarios;
