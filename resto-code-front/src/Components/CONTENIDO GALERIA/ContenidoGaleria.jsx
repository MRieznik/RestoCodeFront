import "../CONTENIDO GALERIA/ContenidoGaleria.css"
import videoextreme from "../../Image/GALERIA-IMAGE/videoPrueba.mp4"
import videocerveza from "../../Image/GALERIA-IMAGE/videocerveza.mp4"
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
            </main>

        </>
    )
}

export default Galeria