import React from 'react'
import "./AboutUs.css";



const AboutUs = () => {




    return (
        <>
            <main>
                <div className="contendor-botonReserva-imagenes">
                    <div className="contenedorBotonReservar">
                        <div className="tituloRestoCode">
                            <h1>Resto Code</h1>
                            <div className="restoBar">
                                <h2>Restobar</h2>
                            </div>
                        </div>
                        <button className="botonReservarIndex">¡Reserva aqui!</button>
                    </div>
                    <div className="imagenDeFondoIndex">
                        <div className="sombraImagenDeFondoIndex"></div>
                    </div>
                </div>
                <div className="contenedorMenu">
                    <div className="tituloMenu">
                        <h3>Tragos y Comidas</h3>
                    </div>
                    <div className="cartasdeMenu">

                    </div>
                </div>
            </main>

            <h1>about us</h1>

        </>
    )
}

export default AboutUs