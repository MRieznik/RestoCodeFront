import "../CONTENIDO GALERIA/ContenidoGaleria.css"
import videoextreme from "../../Image/GALERIA-IMAGE/videoPrueba.mp4"
import videocerveza from "../../Image/GALERIA-IMAGE/videocerveza.mp4"
import videobloquecervezas from "../../Image/GALERIA-IMAGE/videoBloqueCervezas.mp4"


const Galeria = () => {



    return (
        <>
            <main className="contenedorPrincipalDeGaleria">
                <div className="presentacionHamburguesaXtreme">
                    <div className="contenedorXtreme">
                        <div className="nombreHamburguesaXtreme">
                            <h2>X Treme</h2>
                            <h4>¡La Mejor Hamburguesa!</h4>
                        </div>
                        <video className="videoXtreme" src={videoextreme}
                            autoPlay
                            loop
                            muted>
                        </video>
                    </div>
                    <div className="imagenPersonaCerveza">
                        <div className="sombraPersonaCerveza">
                        </div>
                    </div>
                    <video className="videoCerveza" src={videocerveza}
                        autoPlay
                        loop
                        muted>
                    </video>
                </div>

                <div className="presentacionGuarnicion">
                    <div className="contenedorImagenArosDeCebolla">
                        <div className="sombraPersonaCerveza">
                        </div>
                    </div>
                    <div className="contenedorImagenBastonesDeMuzarella">
                    </div>
                    <div className="contenedorImagenVariado">
                        <div className="sombraPersonaCerveza">
                        </div>
                    </div>

                    <div className="contenedorFraseGuarniciones">
                        <h2>Diferentes Guarniciones</h2>
                        <h4>Para acompañar tus comidas</h4>
                    </div>

                </div>

                {/* bloque 3 */}

                <div className="presentacionCervezas">
                    <div className="contenedorBloqueCervezas">
                        <div className="contenedorFraseCerveza">
                            <h2>Ven a Probar Nuestras Cervezas y Cocteles</h2>
                            <h4>¡Solo lo mejor para vos!</h4>
                        </div>
                        <video className="videoBloqueCervezas" src={videobloquecervezas}
                            autoPlay
                            loop
                            muted>
                        </video>
                    </div>
                </div>


                <div className="presentacionCervezas2">
                    <div className="contenedorFraseCerveza2">
                        <h2>Las Mejores Cervezas esta aqui</h2>
                        <h4>Para con quien quieras compartirlas !</h4>
                    </div>

                <div className="contenedorImagenVariado2">
                    <div className="sombraPersonaCerveza">
                    </div>
                </div>
                </div>
            </main>

        </>
    )
}

export default Galeria