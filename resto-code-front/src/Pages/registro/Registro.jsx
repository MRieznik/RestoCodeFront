import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import "./styleRegistro.css";

const Registro = () => {
  /* const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseniaUsuario, setContraseniaUsuario] = useState("");
  const [correoUsuario, setCorreoUsuario] = useState("");
  const [provinciaUsuario, setProvinciaUsuario] = useState("");
  const [ciudadLocalidadUsuario, setCiudadLocalidadUsuario] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Telefono, setTelefono] = useState(""); */

 /*  const handleChange = (e) => {
    setDataUser({ ...DataUser, [e.target.nombreUsuario]: e.target.value})
  }

  const [DataUser, setDataUser] = useState({
    nombreUsuario:"",
    contraseniaUsuario:"",
    correoUsuario:"",
    provinciaUsuario:"",
    ciudadLocalidadUsuario:"",
    direccionUsuario:"",
    telefonoUsuario:""
  }) */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(DataUser)
  };

  return (
    <main>
      <div className="container-fluid h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col m-0 p-0">
            <div className="card card-registration my-0 border-0">
              <div className="row g-0">
                <div className="col">
                  <div>
                    <p className="mt-3 mx-3"> Volver </p>
                  </div>

                  <div className="card-body pt-0 px-md-5 mx-md-5 m-md-3 text-black">
                    <form onSubmit={handleSubmit} id="formRegistroUsuarios">
                      <div className="contenedorTituloFormuBotonRegistro ">
                        <div className="mb-4 pb-2 text-center w-100 mb-auto">
                          <h1 className="fw-bold m-0 controladorTmanioTextoReg">
                            Únete a RestoCode
                          </h1>
                          <p>
                            ¿Ya tienes una cuenta?{" "}
                            <a
                              className="fw-bold link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                              href=""
                            >
                              {" "}
                              Inicia Sesión
                            </a>
                          </p>
                        </div>

                        <div className="aling-self-center w-100">
                          <div className="row ">
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fw-bold"
                                  htmlFor="nombreUsuario"
                                >
                                  {" "}
                                  Nombre de Usuario
                                </label>
                                <span className="text-danger">*</span>
                                <input
                                  type="text"
                                  id="nombreUsuario"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados"
                                  placeholder="Ej: User RestoCode"
                                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                                  title="Este campo solo permite letras y espacios en blanco"
                                  required
                                  maxLength="50"
                                  name="nombreUsuario"
                                  /* value={DataUser.nombreUsuario}
                                  onChange={handleChange} */
                                  /* onChange={(e) =>
                                    setNombreUsuario(e.target.value)
                                  } */
                                />
                              </div>
                            </div>
                            <div className="form-outline col-md-6 mb-2">
                              <label
                                className="form-label fw-bold"
                                htmlFor="contraseniaUsuario"
                              >
                                Contraseña
                              </label>
                              <span className="text-danger">*</span>
                              <span className="text-secondary">
                                (entre 8 y 12 caracteres)
                              </span>
                              <input
                                type="password"
                                id="contraseniaUsuario"
                                className="form-control form-control-lg validadoss NoValidados"
                                placeholder="Contraseña"
                                pattern="[A-Za-z0-9!?-]{8,12}"
                                title="Ingrese una contraseña válida (entre 8 y 12 caracteres)"
                                required
                                minLength="8"
                                maxLength="12"
                                name="contraseniaUsuario"
                                /* value={DataUser.contraseniaUsuario}
                                onChange={handleChange} */
                                /* onChange={(e) =>
                                  setContraseniaUsuario(e.target.value)
                                } */
                              />
                            </div>
                          </div>

                          {/* Rest of the form inputs... */}

                          <div className="form-outline mb-2">
                            <label
                              className="form-label fw-bold"
                              htmlFor="correoUsuario"
                            >
                              Correo
                            </label>
                            <span className="text-danger">*</span>
                            <input
                              type="email"
                              id="correoUsuario"
                              className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados"
                              placeholder="Ej: RestoCode@gmail.com"
                              title="Ingrese un correo para poder crear la cuenta"
                              autoComplete="on"
                              name="correoUsuario"
                              /* value={DataUser.correoUsuario}
                              onChange={handleChange} */
                              /* onChange={(e) => setCorreoUsuario(e.target.value)} */
                              required
                              maxLength="76"
                            />
                            {/* {!isValidEmail && <span id="mensajeErrorPRegistro" className="mensaje-error-Registro-Correo alert alert-danger">Ingrese un correo válido.</span>} */}
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-outline ">
                                <label
                                  className="form-label fw-bold"
                                  htmlFor="provinciaUsuario"
                                >
                                  Provincia{" "}
                                </label>
                                <input
                                  type="text"
                                  id="provinciaUsuario"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados"
                                  placeholder="Ej: Tucumán"
                                  pattern="^[A-Za-z0-9]{1,50}$"
                                  title="Ingrese la provincia donde reside"
                                  maxLength="50"
                                  name="provinciaUsuario"
                                  /* value={DataUser.provinciaUsuario}
                                  onChange={handleChange} */
                                  /* onChange={(e) =>
                                    setProvinciaUsuario(e.target.value)
                                  } */
                                />
                              </div>
                            </div>

                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fw-bold"
                                  htmlFor="ciudadLocalidadUsuario"
                                >
                                  Ciudad/Localidad
                                </label>
                                <input
                                  type="text"
                                  id="ciudadLocalidadUsuario"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados"
                                  placeholder="Ej: Famaillá"
                                  pattern="^[A-Za-z0-9]{1,50}$"
                                  title="Ingrese la Ciudad/Localidad donde reside"
                                  maxLength="50"
                                  name="ciudadLocalidadUsuario"
                                  /* value={DataUser.ciudadLocalidadUsuario}
                                  onChange={handleChange} */
                                  /* onChange={(e) =>
                                    setCiudadLocalidadUsuario(e.target.value)
                                  } */
                                />
                              </div>
                            </div>

                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fw-bold"
                                  htmlFor="direccion"
                                >
                                  Dirección
                                </label>
                                <input
                                  type="text"
                                  id="direccion"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados"
                                  placeholder="Ej: San Martín 630"
                                  pattern="^[A-Za-z0-9]{1,150}$"
                                  title="Dirección de donde reside"
                                  maxLength="150"
                                  name="direccionUsuario"
                                  /* value={DataUser.direccionUsuario}
                                  onChange={handleChange} */
                                 /*  onChange={(e) => setDireccion(e.target.value)} */
                                />
                              </div>
                            </div>

                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fw-bold"
                                  htmlFor="telefono"
                                >
                                  Teléfono
                                </label>
                                <input
                                  type="text"
                                  id="telefono"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados"
                                  placeholder="Ej: 3816610091"
                                  pattern="[0-9]{7,15}"
                                  title="Ingrese un número de teléfono válido (entre 7 y 15 dígitos)"
                                  maxLength="15"
                                  name="telefonoUsuario"
                                  /* value={DataUser.telefonoUsuario}
                                  onChange={handleChange} */
                                  /* onChange={(e) => setTelefono(e.target.value)} */
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-100 mt-auto" >
                          <div className="d-flex mt-5 justify-content-end pt-3">
                            <input
                              type="submit"
                              id="submitRegistrar"
                              className="tamanioImpustRegistro form-control form-control-lg fw-bold btn btn-dark btn-lg botonSubmitRegistro"
                              value="Registrarse"
                            />
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
                    <div id="contenMensajeError" className="d-none"></div>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-xl-block imgFondo-1 quietoRegistro"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Registro;
