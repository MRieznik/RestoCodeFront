import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import "./styleRegistro.css";

const Registro = () => {

 const handleChange = (e) => {
    setDataUser({ ...DataUser, [e.target.name]: e.target.value})
  }

  const [DataUser, setDataUser] = useState({
    nombreUsuario:"",
    apellidoUsuario:"",
    contraseniaUsuario:"",
    correoUsuario:"",
    telefonoUsuario:""
  }) 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(DataUser)
    setDataUser({
      nombreUsuario:"",
      apellidoUsuario:"",
      contraseniaUsuario:"",
      correoUsuario:"",
      telefonoUsuario:""
    })
  };


  //Funciones para la validacion de los datos:

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


  return (
    <main className="contenedorGeneralRegistro h-100">
      <div className="container-fluid h-100 contenedorGeneralRegistro">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col m-0 p-0">
            <div className="card card-registration my-0 border-0 contenedorGeneralRegistro">
              <div className="row g-0">
                <div className="col">
                  {/* <div>
                    <p className="mt-3 mx-3 text-light"> Volver </p>
                  </div> */}

                  <div className="card-body pt-5 px-md-5 mx-md-5 m-md-3 text-black">
                    <form onSubmit={handleSubmit} id="formRegistroUsuarios">
                      <div className="contenedorTituloFormuBotonRegistro ">
                        <div className="mb-4 pb-2 text-center w-100 mb-auto">
                          <h1 className=" m-0 controladorTmanioTextoReg text-light">
                            Únete a RestoCode
                          </h1>
                          <p className=" fs-4 RegistroColorSub">
                           Forma parte de la comunidad gastronómica de RestoCode
                            
                          </p>
                        </div>

                        <div className="aling-self-center w-100">
                          <div className="row ">
                            <div className="col-md-6 mb-1 mt-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fs-5 text-light mb-0"
                                  htmlFor="nombreUsuario"
                                >
                                  {" "}
                                  Nombre/s
                                </label>
                                <span className="text-danger">*</span>
                                <input
                                  type="text"
                                  id="nombreUsuario"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados mb-1"
                                  placeholder="Ej: Juan Resto"
                                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                                  title="Este campo solo permite letras y espacios en blanco"
                                  required
                                  maxLength="50"
                                  name="nombreUsuario"
                                  value={DataUser.nombreUsuario}
                                  onChange={handleChange} 
                                  /* onChange={(e) =>
                                    setNombreUsuario(e.target.value)
                                  }  */
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-1 mt-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fs-5 text-light mb-0"
                                  htmlFor="apellidoUsuario"
                                >
                                  {" "}
                                  Apellido
                                </label>
                                <span className="text-danger">*</span>
                                <input
                                  type="text"
                                  id="apellidoUsuario"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados mb-1"
                                  placeholder="Ej: Code"
                                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                                  title="Este campo solo permite letras y espacios en blanco"
                                  required
                                  maxLength="50"
                                  name="apellidoUsuario"
                                  value={DataUser.apellidoUsuario}
                                  onChange={handleChange}
                                  /* onChange={(e) =>
                                    setApellidoUsuario(e.target.value)
                                  } */
                                />
                              </div>
                            </div>
                           
                          </div>
                          <div className="row ">
                            {/* <div className="col-md-6 mb-2">
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
                               /*  />
                              </div>
                            </div> */} 
                            <div className="form-outline col-md-12 mb-1 mt-2">
                              <label
                                className="form-label fs-5 text-light mb-0"
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
                                /* id="contraseniaUsuario" */
                                className="form-control form-control-lg validadoss NoValidados tamanioImpustRegistro mb-1"
                                placeholder="Contraseña"
                                pattern="[A-Za-z0-9!?-]{8,12}"
                                title="Ingrese una contraseña válida (entre 8 y 12 caracteres)"
                                required
                                minLength="8"
                                maxLength="12"
                                name="contraseniaUsuario"
                                value={DataUser.contraseniaUsuario}
                                onChange={handleChange} 
                                /* onChange={(e) =>
                                  setContraseniaUsuario(e.target.value)
                                } */
                              />
                            </div>
                          </div>

                         

                          <div className="form-outline mb-1 mt-2">
                            <label
                              className="form-label fs-5 text-light mb-0"
                              htmlFor="correoUsuario"
                            >
                              Correo
                            </label>
                            <span className="text-danger">*</span>
                            <input
                              type="email"
                              id="correoUsuario"
                              className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados mb-1"
                              placeholder="Ej: RestoCode@gmail.com"
                              title="Ingrese un correo para poder crear la cuenta"
                              autoComplete="on"
                              name="correoUsuario"
                              value={DataUser.correoUsuario}
                              onChange={handleChange}
                              /* onChange={(e) => setCorreoUsuario(e.target.value)} */
                              required
                              maxLength="76"
                            />
                            {/* {!isValidEmail && <span id="mensajeErrorPRegistro" className="mensaje-error-Registro-Correo alert alert-danger">Ingrese un correo válido.</span>} */}
                          </div>

                          <div className="row">
                            

                           {/*  <div className="col-md-12mb-1 mt-2">
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
                                  value={DataUser.direccionUsuario}
                                  onChange={handleChange} 
                                  onChange={(e) => setDireccion(e.target.value)}
                                />
                              </div>
                            </div> */}

                            <div className="col-md-12 mb-1 mt-2">
                              <div className="form-outline">
                                <label
                                  className="form-label fs-5 text-light mb-0"
                                  htmlFor="telefono"
                                >
                                  Teléfono
                                </label>
                                <input
                                  type="text"
                                  id="telefono"
                                  className="tamanioImpustRegistro form-control form-control-lg validadoss NoValidados mb-1"
                                  placeholder="Ej: 3816610091"
                                  pattern="[0-9]{7,15}"
                                  title="Ingrese un número de teléfono válido (entre 7 y 15 dígitos)"
                                  maxLength="15"
                                  name="telefonoUsuario"
                                  value={DataUser.telefonoUsuario}
                                  onChange={handleChange}
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
                              className="   form-control form-control-lg btn-lg botonSubmitRegistro"
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
