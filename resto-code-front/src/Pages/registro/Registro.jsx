import { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { UsuariosContext } from "../../Context/UsersContext";
import ModalInicarSesion from "../../Components/MODAL INICAR-SESION/ModalInicarSesion";
import "./Registro.css";
import axios from "axios";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Registro = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { users } = useContext(UsuariosContext);
  const [DataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    contrasenia: "",
    rolUsuario: "",
  });

  const handleChange = (e) => {
    setDataUser({ ...DataUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (verificarCorreoExistente(DataUser.email)) {
      setClaseCorreo2("tracking-in-expand mensaje-error-Registro-Correo");
      setTimeout(() => {
        setClaseCorreo2("mensaje-error-Registro-Correo");
      }, 500);
      return;
    } else {
      try {
        const response =  await axios.post(
          "http://localhost:8081/api/register",
          DataUser
        );
        setDataUser({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          contrasenia: "",
          rol: "usuario",
        });
        users.push(DataUser);
        Swal.fire({
          icon: "success",
          title: "¡Listo!",
          text: "Usuario Registrado!",
          showCancelButton: false,
          confirmButtonText: "Ok",
          confirmButtonColor: "#1d0c20",
          customClass: {
            title: "sweetalertRegistroTitle",
            content: "sweetalertRegistropopup",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            handleShow();
          }
        });
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  //Defino los actualizadores de estados para manejar las clases que se colocaran en cada caso
  const [ClaseNombre, setClaseNombre] = useState(
    "mensaje-error-Registro  d-none" /* text-danger */
  );
  const [ClaseApellido, setClaseApellido] = useState(
    "mensaje-error-Registro d-none"
  );
  const [ClaseCorreo, setClaseCorreo] = useState(
    "mensaje-error-Registro d-none"
  );
  const [ClaseCorreo2, setClaseCorreo2] = useState(
    "mensaje-error-Registro-Correo d-none"
  );
  const [ClaseTelefono, setClaseTelefono] = useState(
    "mensaje-error-Registro d-none"
  );

  const [ClaseContrasenia, setClaseContrasenia] = useState(
    "mensaje-error-Registro d-none"
  );
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

  //Funciones para la validacion de los datos:
  /***************************************** */

  // Funcion que valida si la cadena tiene la logitud adecuada
  const longitudValida = (cadena, valorMin, valorMax) => {
    return cadena.length >= valorMin && cadena.length <= valorMax;
  };

  //Funcion que valida un correo electronico
  const correoValido = (correo) => {
    const expReg = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    return longitudValida(correo, 10, 100) && expReg.test(correo);
  };

  //Funcion que valida una contraseña
  const contraseniaValida = (contrasenia) => {
    const expReg = /^[A-Za-z0-9!?-]{8,12}$/;
    return expReg.test(contrasenia) && longitudValida(contrasenia, 8, 12);
  };

  // Funcion que valida texto comun (para input Nombre y Apellido)
  const NombreApellidoValido = (nomApe) => {
    const expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    return expReg.test(nomApe) && longitudValida(nomApe, 3, 50);
  };

  //Funcion que valida un numero de telefono
  const telefonoValido = (telefono) => {
    const expReg = /[0-9]{7,15}/;
    return expReg.test(telefono) && longitudValida(telefono, 7, 15);
  };

  //Verificar la existencia de un correo
  const verificarCorreoExistente = (correo) => {
    return users.some((user) => user.email === correo);
  };

  //Desarrollo de las funciones OnBlur
  /***********************************/

  const handleNombreBlur = () => {
    const nombreValido = NombreApellidoValido(DataUser.nombre);

    if (!nombreValido) {
      setClaseNombre("mensaje-error-Registro");
    } else {
      setClaseNombre("mensaje-error-Registro d-none");
    }
  };

  const handleApellidoBlur = () => {
    const apelldoValido = NombreApellidoValido(DataUser.apellido);
    if (!apelldoValido) {
      setClaseApellido("mensaje-error-Registro");
    } else {
      setClaseApellido("mensaje-error-Registro d-none");
    }
  };

  const handleContraseñaBlur = () => {
    const contraseñaValid = contraseniaValida(DataUser.contrasenia);
    if (!contraseñaValid) {
      setClaseContrasenia("mensaje-error-Registro");
    } else {
      setClaseContrasenia("mensaje-error-Registro d-none");
    }
  };

  const handleCorreoBlur = () => {
    const correoValid = correoValido(DataUser.email);
    if (verificarCorreoExistente(DataUser.email)) {
      setClaseCorreo2("mensaje-error-Registro-Correo");
    } else {
      setClaseCorreo2("mensaje-error-Registro-Correo d-none"); //nesesario porque si no no cambia una vez que el problema se resuelva
    }
    if (!correoValid) {
      setClaseCorreo("mensaje-error-Registro");
    } else {
      setClaseCorreo("mensaje-error-Registro d-none");
    }
  };

  const handleTelefonoBlur = () => {
    const telefonoValid = telefonoValido(DataUser.telefono);
    if (telefonoValid || DataUser.telefono == "") {
      setClaseTelefono("mensaje-error-Registro d-none");
    } else {
      setClaseTelefono("mensaje-error-Registro");
    }
  };

  return (
    <main className="contenedorGeneralRegistro 0">
      {" "}
      {/* h-10 */}
      <div className="container-fluid  contenedorGeneralRegistro">
        <div className="row d-flex justify-content-center align-items-center ">
          {/* h-100 */}
          <div className="col m-0 p-0">
            <div className="card card-registration my-0 border-0 contenedorGeneralRegistro">
              <div className="row g-0">
                <div className="col">
                  <div className="card-body  px-md-5 mx-md-5 m-md-3 text-black">
                    <form onSubmit={handleSubmit} id="formRegistroUsuarios">
                      <div className="contenedorTituloFormuBotonRegistro  ">
                        <div className=" text-center w-100  ">
                          <h1 className=" m-0 controladorTmanioTextoReg text-light">
                            Únete a RestoCode
                          </h1>
                          <p className=" fs-4 RegistroColorSub">
                            Forma parte de la comunidad gastronómica de
                            RestoCode
                          </p>
                        </div>

                        <div className=" w-100 aling-self-center controladorTamanioMaximo controladorTamanioMediano">
                          <div className="row ">
                            <div className="col-md-6 mb-1 mt-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fs-5 text-light mb-0"
                                  htmlFor="nombre"
                                >
                                  {" "}
                                  Nombre/s
                                </label>
                                <span className="text-danger">*</span>
                                <span
                                  id="mensajeErrorPRegistro"
                                  className={ClaseNombre}
                                >
                                  {" "}
                                  Por favor ingrese un Nombre válido.
                                </span>
                                <input
                                  type="text"
                                  id="nombre"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados "
                                  placeholder="Ej: Juan Resto"
                                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                                  title="Este campo solo permite letras y espacios en blanco"
                                  required
                                  maxLength="50"
                                  name="nombre"
                                  value={DataUser.nombre}
                                  onChange={handleChange}
                                  onBlur={handleNombreBlur}
                                />
                              </div>

                              <div className="d-none">
                                <label
                                  className="form-label fs-5 text-light mb-0"
                                  htmlFor="rolUsuario"
                                >
                                  {" "}
                                  Rol
                                </label>
                                <span
                                  id="mensajeErrorPRegistro"
                                  className={ClaseNombre}
                                >
                                  {" "}
                                  Por favor ingrese un Nombre válido.
                                </span>
                                <input
                                  type="text"
                                  id="rolUsuario"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados"
                                  placeholder="Ej: Juan Resto"
                                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                                  title="Este campo solo permite letras y espacios en blanco"
                                  name="rolUsuario"
                                  value={(DataUser.rolUsuario = "usuario")}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-1 mt-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fs-5 text-light mb-0"
                                  htmlFor="apellido"
                                >
                                  {" "}
                                  Apellido
                                </label>
                                <span className="text-danger">*</span>
                                <span
                                  id="mensajeErrorPRegistro"
                                  className={ClaseApellido}
                                >
                                  {" "}
                                  Por favor ingrese un Apellido válido.
                                </span>
                                <input
                                  type="text"
                                  id="apellido"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados"
                                  placeholder="Ej: Code"
                                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                                  title="Este campo solo permite letras y espacios en blanco"
                                  required
                                  maxLength="50"
                                  name="apellido"
                                  value={DataUser.apellido}
                                  onChange={handleChange}
                                  onBlur={handleApellidoBlur}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="form-outline mb-1 mt-2">
                            <label
                              className="form-label fs-5 text-light mb-0"
                              htmlFor="email"
                            >
                              Correo
                            </label>
                            <span className="text-danger">*</span>
                            <span
                              id="mensajeErrorPRegistro"
                              className={ClaseCorreo}
                            >
                              Por favor ingrese un correo válido.
                            </span>
                            <span
                              id="mensajeErrorPRegistro"
                              className={ClaseCorreo2}
                            >
                              El correo ya se encuentra asociado a una cuenta
                            </span>
                            <input
                              type="email"
                              id="email"
                              className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados "
                              placeholder="Ej: RestoCode@gmail.com"
                              title="Ingrese un correo para poder crear la cuenta"
                              autoComplete="on"
                              name="email"
                              value={DataUser.email}
                              onChange={handleChange}
                              onBlur={handleCorreoBlur}
                              required
                              maxLength="76"
                            />
                          </div>

                          <div className="row">
                            <div className="col-md-12 mb-1 mt-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fs-5 text-light mb-0"
                                  htmlFor="telefono"
                                >
                                  Teléfono
                                </label>
                                <span
                                  id="mensajeErrorPRegistro"
                                  className={ClaseTelefono}
                                >
                                  {" "}
                                  Por favor ingrese un teléfono válido.
                                </span>

                                <input
                                  type="text"
                                  id="telefono"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados "
                                  placeholder="Ej: 3816610091"
                                  pattern="[0-9]{7,15}"
                                  title="Ingrese un número de teléfono válido (entre 7 y 15 dígitos)"
                                  maxLength="15"
                                  name="telefono"
                                  value={DataUser.telefono}
                                  onChange={handleChange}
                                  onBlur={handleTelefonoBlur}
                                />
                              </div>
                            </div>

                            <div>
                              {/* 
                              value={DataUser.nombreUsuario}
                                  onChange={handleChange}  */}
                            </div>
                          </div>

                          <div className="row ">
                            <div className="form-outline col-md-12 mb-1 mt-2">
                              <label
                                className="form-label fs-5 text-light mb-0"
                                htmlFor="contrasenia"
                              >
                                Contraseña
                              </label>
                              <span className="text-danger">*</span>
                              <span className="text-secondary">
                                (entre 8 y 12 caracteres)
                              </span>
                              <span
                                id="mensajeErrorPRegistro"
                                className={ClaseContrasenia}
                              >
                                {" "}
                                Por favor ingrese una Contraseña válido.
                              </span>

                              <div className=" d-flex flex-row bg-color-black">
                                <input
                                  type={showPassword ? "text" : "password"}
                                  /* id="contraseniaUsuario" */
                                  className="form-control form-control-lg validadoss NoValidados tamanioImpustRegistro  w-20"
                                  placeholder="Contraseña"
                                  pattern="[A-Za-z0-9!?]{8,12}"
                                  title="Ingrese una contraseña válida (entre 8 y 12 caracteres)"
                                  required
                                  minLength="8"
                                  maxLength="12"
                                  name="contrasenia"
                                  value={DataUser.contrasenia}
                                  onChange={handleChange}
                                  onBlur={handleContraseñaBlur}
                                />
                                <div className="">
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary tamanioImpustRegistro"
                                    onClick={toggleShowPassword}
                                  >
                                    <FontAwesomeIcon
                                      icon={showPassword ? faEyeSlash : faEye}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-100  controladorTamanioMaximo">
                          <div className="d-flex justify-content-end pt-3">
                            <button
                              type="submit"
                              id="submitRegistrar"
                              className="   form-control form-control-lg btn-lg botonSubmitRegistro"
                              value="Registrarse"
                            >
                              Registrarse
                            </button>
                          </div>
                          <div className="pt-1">
                            <p className="text-center fs-6 text-secondary">
                              Al unirte, aceptas los <u>Términos</u> y{" "}
                              <u>Política de privacidad</u>
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* <div id="contenMensajeError" className="d-none"></div> */}
                  </div>
                </div>
                <div className="col-lg-5 d-none d-xl-block imgFondo-1 quietoRegistro"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className="ventanaModalInicarSesion"
      >
        <Modal.Header closeButton className="headerModal">
          <Modal.Title>Ingresa tu usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal">
          <ModalInicarSesion handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default Registro;
