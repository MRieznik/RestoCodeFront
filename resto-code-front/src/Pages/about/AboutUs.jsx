import React from 'react'
import "./AboutUs.css";
import { Container, Row, Col } from 'react-bootstrap';



const AboutUs = () => {




    return (
        <>

            <Container>
                <div className="contendor-imagenes">
                    <div className="contenedorSeccion">
                        <div className="Nombre">
                            <h3>Marcos Rieznik</h3>
                            <div className="descripcion">
                                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, sunt.</h5>
                            </div>
                        </div>

                    </div>
                    <div className="aboutImagen">
                        <div className="sombra"></div>
                    </div>
                </div>



                <div className="contendor-imagenes">
                    <div className="aboutImagen">
                        <div className="sombra"></div>
                    </div>
                    <div className="contenedorSeccion">
                        <div className="Nombre">
                            <h3>Marcos Rieznik</h3>
                            <div className="descripcion">
                                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, sunt.</h5>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="contendor-imagenes">
                    <div className="contenedorSeccion">
                        <div className="Nombre">
                            <h3>Marcos Rieznik</h3>
                            <div className="descripcion">
                                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, sunt.</h5>
                            </div>
                        </div>

                    </div>
                    <div className="aboutImagen">
                        <div className="sombra"></div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default AboutUs