import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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


  //Defino los actualizadores de estados para manejar las clases que se colocaran en cada caso
  const [ClaseNombre, setClaseNombre] = useState("mensaje-error-Registro-Correo text-danger d-none");
  const [ClaseApellido, setClaseApellido] = useState("mensaje-error-Registro-Correo text-danger d-none");
  const [ClaseContrasenia, setClaseContrasenia] = useState("mensaje-error-Registro-Correo text-danger d-none");
  const [ClaseCorreo, setClaseCorreo] = useState("mensaje-error-Registro-Correo text-danger d-none");
  const [ClaseTelefono, setClaseTelefono] = useState("mensaje-error-Registro-Correo text-danger d-none");

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



  //Desarrollo de las funciones OnBlur
  /***********************************/ 
  
  const handleNombreBlur = () => {
    const nombreValido = NombreApellidoValido(DataUser.nombreUsuario);
    console.log("Nombre válido:", nombreValido);
    if (!nombreValido) {
      setClaseNombre("mensaje-error-Registro-Correo text-danger")
    }  else {
      setClaseNombre("mensaje-error-Registro-Correo text-danger d-none")
    }
  };

  const handleApellidoBlur = () => {
    const apelldoValido = NombreApellidoValido(DataUser.apellidoUsuario);
    console.log("apellido válido:", apelldoValido);
    if (!apelldoValido) {
      setClaseApellido("mensaje-error-Registro-Correo text-danger")
    }  else {
      setClaseApellido("mensaje-error-Registro-Correo text-danger d-none")
    }
  };

  const handleContraseñaBlur = () => {
    const contraseñaValid = contraseniaValida(DataUser.contraseniaUsuario);
    console.log("contra válido:", contraseñaValid);
    if (!contraseñaValid) {
      setClaseContrasenia("mensaje-error-Registro-Correo text-danger")
    }  else {
      setClaseContrasenia("mensaje-error-Registro-Correo text-danger d-none")
    }
  };

  const handleCorreoBlur = () => {
    const correoValid = correoValido(DataUser.correoUsuario);
    console.log("correo válido:", correoValid);
    if (!correoValid) {
      setClaseCorreo("mensaje-error-Registro-Correo text-danger")
    }  else {
      setClaseCorreo("mensaje-error-Registro-Correo text-danger d-none")
    }
  };

  const handleTelefonoBlur = () => {
    const telefonoValid = telefonoValido(DataUser.telefonoUsuario);
    console.log("telefono válido:", telefonoValid);
    if (!telefonoValid) {
      setClaseTelefono("mensaje-error-Registro-Correo text-danger")
    }  else {
      setClaseTelefono("mensaje-error-Registro-Correo text-danger d-none")
    }
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
                                  onBlur={handleNombreBlur}
                                  /* onChange={(e) =>
                                    setNombreUsuario(e.target.value)
                                  }  */
                                />
                                <span id="mensajeErrorPRegistro" className={ClaseNombre} >Por favor ingrese un Nombre válido.</span>
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
                                  onBlur={handleApellidoBlur}
                                  /* onChange={(e) =>
                                    setApellidoUsuario(e.target.value)
                                  } */
                                />
                                <span id="mensajeErrorPRegistro" className={ClaseApellido} >Por favor ingrese un Apellido válido.</span>
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


                              <div className=" d-flex flex-row bg-color-black">

                              
                              <input
                                type={showPassword ? 'text' : 'password'}
                                /* id="contraseniaUsuario" */
                                className="form-control form-control-lg validadoss NoValidados tamanioImpustRegistro mb-1 w-20"
                                placeholder="Contraseña"
                                pattern="[A-Za-z0-9!?-]{8,12}"
                                title="Ingrese una contraseña válida (entre 8 y 12 caracteres)"
                                required
                                minLength="8"
                                maxLength="12"
                                name="contraseniaUsuario"
                                value={DataUser.contraseniaUsuario}
                                onChange={handleChange} 
                                onBlur={handleContraseñaBlur}
                                /* onChange={(e) =>
                                  setContraseniaUsuario(e.target.value)
                                } */
                                
                              />
                              <div className="">
                              <button
                                  type="button"
                                  className="btn btn-outline-secondary tamanioImpustRegistro"
                                  onClick={toggleShowPassword}
                                >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                              </button>
                              </div>
                              </div>
                              
                              <span id="mensajeErrorPRegistro" className={ClaseContrasenia} >Por faovr ingrese una Contraseña válido.</span>
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
                              onBlur={handleCorreoBlur}
                              /* onChange={(e) => setCorreoUsuario(e.target.value)} */
                              required
                              maxLength="76"
                            />
                            {/* {!isValidEmail && <span id="mensajeErrorPRegistro" className="mensaje-error-Registro-Correo alert alert-danger">Ingrese un correo válido.</span>} */}
                            <span id="mensajeErrorPRegistro" className={ClaseCorreo} >Por favor ingrese un correo válido.</span>
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
                                  onBlur={handleTelefonoBlur}
                                  /* onChange={(e) => setTelefono(e.target.value)} */
                                />
                                <span id="mensajeErrorPRegistro" className={ClaseTelefono} >Por favor ingrese un teléfono válido.</span>
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

//senti que me miraba con amor, un amor que seguramente me invente yo...

export default Registro;
