import React, { useState } from "react";
import "./styleRegistro.css"

const Registro = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseniaUsuario, setContraseniaUsuario] = useState("");
  const [correoUsuario, setCorreoUsuario] = useState("");
  const [provinciaUsuario, setProvinciaUsuario] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="container-fluid h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col m-0 p-0">
            <div className="card card-registration my-0 border-0">
              <div className="row g-0">
                <div className="col">
                  {/* <a href="../index.html" title="Ir al incio">
                    <img
                      src="../img/LogoRestoCode.png"
                      className="LogoRegistroLuxor nazaret mt-3 mx-4 mb-0 pt-0"
                      alt=""
                    />
                  </a> */}
                  <div className="card-body pt-0 px-md-5 mx-md-5 m-md-3 text-black">
                    <form onSubmit={handleSubmit} id="formRegistroUsuarios">
                      <div className="mb-4 pt-1 text-center">
                        <h1 className="fw-bold m-0 controladorTmanioTextoReg">
                          Únete a RestoCode
                        </h1>
                        <p>
                          ¿Ya tienes una cuenta?{" "}
                          <a
                            className="fw-bold link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            href="login.html"
                          >
                            {" "}
                            Inicia Sesión
                          </a>
                        </p>
                      </div>

                      <div className="row">
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
                              placeholder="Ej: User Luxor Sneakers"
                              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                              title="Este campo solo permite letras y espacios en blanco"
                              required
                              maxLength="50"
                              value={nombreUsuario}
                              onChange={(e) => setNombreUsuario(e.target.value)}
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
                            title="Debe estar conformada como mínimo por 8 caracteres y como máximo por 12 caracteres"
                            required
                            minLength="8"
                            maxLength="12"
                            value={contraseniaUsuario}
                            onChange={(e) =>
                              setContraseniaUsuario(e.target.value)
                            }
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
                          placeholder="Ej: UserLuxor@gmail.com"
                          autoComplete="on"
                          value={correoUsuario}
                          onChange={(e) => setCorreoUsuario(e.target.value)}
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
                              for="provinciaUsuario"
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
                              maxlength="50"
                              value={provinciaUsuario}
                              onChange={(e) => 
                                setProvinciaUsuario(e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6 mb-2">
                          <div className="form-outline">
                            <label
                              className="form-label fw-bold"
                              for="ciudadLocalidadUsuario"
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
                              maxlength="50"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <input
                          type="submit"
                          id="submitRegistrar"
                          className="tamanioImpustRegistro form-control form-control-lg fw-bold btn btn-dark btn-lg"
                          value="Registrarse"
                        />
                      </div>
                    </form>
                    <div id="contenMensajeError" className="d-none"></div>
                  </div>
                  <div className="pt-0">
                    <p className="text-center fs-6 text-secondary">
                      Al unirte, aceptas los Términos y Política de privacidad
                    </p>
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
