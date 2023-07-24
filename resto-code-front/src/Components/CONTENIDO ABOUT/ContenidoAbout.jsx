import "./ContenidoAbout.css";
import fotomarcos from "../../Image/ABOUT-IMAGE/fotoMarcos.png"
import fotolautaro from "../../Image/ABOUT-IMAGE/fotoLautaro.png" 
import fotoluisina from "../../Image/ABOUT-IMAGE/fotoLuisina.png"
import fotomariana from "../../Image/ABOUT-IMAGE/fotoMariana.png"
import fotonazaret from "../../Image/ABOUT-IMAGE/fotoNazaret.png"
import fotosergio from "../../Image/ABOUT-IMAGE/fotoSergio.png"
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
const ContenidoAbout = () => {
  return (
    <>
      <main className="contenedorPrincipalAbout">
        <div className="contendorPortadaAbout">
          <div className="sombraPortadaAbout">
            <h1>Resto code</h1>
            <h3>NUESTRA REVOLUCIÓN ES EL COMIENZO DE LA EVOLUCIÓN</h3>
            <h5>
              <strong>Resto Code</strong> nace como fruto del compañerismo y la
              pasión por lo que hacemos.
            </h5>
          </div>
        </div>
        <div className="bloqueUnoDeABout">
          <div className="cajaInfoMasImagenAbout">
            <h3>
              SOMOS APASIONADOS
            </h3>
            <p>
              <strong>En todo lo que hacemos, desde el primer día.</strong>
            </p>
            <p>
              En un rincón de Orihuela, Alicante, cuando aún la cerveza
              artesanal era un sueño muy lejano en todo el mundo.
            </p>
          </div>
          <div className="cajaFotosIntegrantes">
            <img src={fotomarcos} alt="Foto del integrante Marcos" />
          </div>
          <div className="cajaInformacionIntegrantes"></div>
        </div>
        <div className="bloqueUnoDeABout">
          <div className="cajaInfoMasImagenAbout">
            <h3>
              SOMOS APASIONADOS
            </h3>
            <p>
              <strong>En todo lo que hacemos, desde el primer día.</strong>
            </p>
            <p>
              En un rincón de Orihuela, Alicante, cuando aún la cerveza
              artesanal era un sueño muy lejano en todo el mundo.
            </p>
          </div>
          <div className="cajaFotosIntegrantes img-fluid">
            <img src={fotolautaro} alt="Foto del integrante Lautaro" />
          </div>
          <div className="cajaInformacionIntegrantes"></div>
        </div>
        <div className="bloqueUnoDeABout">
          <div className="cajaInfoMasImagenAbout">
            <h3>
              SOMOS APASIONADOS
            </h3>
            <p>
              <strong>En todo lo que hacemos, desde el primer día.</strong>
            </p>
            <p>
              En un rincón de Orihuela, Alicante, cuando aún la cerveza
              artesanal era un sueño muy lejano en todo el mundo.
            </p>
          </div>
          <div className="cajaFotosIntegrantes">
            <img src={fotoluisina} alt="Foto del integrante Luisina" />
          </div>
          <div className="cajaInformacionIntegrantes"></div>
        </div>
        <div className="bloqueUnoDeABout">
          <div className="cajaInfoMasImagenAbout">
            <h3>
              SOMOS APASIONADOS
            </h3>
            <p>
              <strong>En todo lo que hacemos, desde el primer día.</strong>
            </p>
            <p>
              En un rincón de Orihuela, Alicante, cuando aún la cerveza
              artesanal era un sueño muy lejano en todo el mundo.
            </p>
          </div>
          <div className="cajaFotosIntegrantes">
            <img src={fotomariana} alt="Foto del integrante Mariana" />
          </div>
          <div className="cajaInformacionIntegrantes"></div>
        </div>
        <div className="bloqueUnoDeABout">
          <div className="cajaInfoMasImagenAbout">
            <h3>
              SOMOS APASIONADOS
            </h3>
            <p>
              <strong>En todo lo que hacemos, desde el primer día.</strong>
            </p>
            <p>
              En un rincón de Orihuela, Alicante, cuando aún la cerveza
              artesanal era un sueño muy lejano en todo el mundo.
            </p>
          </div>
          <div className="cajaFotosIntegrantes">
            <img src={fotonazaret} alt="Foto del integrante Nazaret" />
          </div>
          <div className="cajaInformacionIntegrantes"></div>
        </div>
        <div className="bloqueUnoDeABout">
          <div className="cajaInfoMasImagenAbout">
            <h3>
              SOMOS APASIONADOS
            </h3>
            <p>
              <strong>En todo lo que hacemos, desde el primer día.</strong>
            </p>
            <p>
              En un rincón de Orihuela, Alicante, cuando aún la cerveza
              artesanal era un sueño muy lejano en todo el mundo.
            </p>
          </div>
          <div className="cajaFotosIntegrantes">
            <img src={fotosergio} alt="Foto del integrante Sergio" />
          </div>
          <div className="cajaInformacionIntegrantes"></div>
        </div>
        
      </main>
    </>
  );
};

export default ContenidoAbout;
