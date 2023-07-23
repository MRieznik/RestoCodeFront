import "./Footer.css";
import logofooter from "C:/Users/Usuario/Desktop/RestoCodeFront/resto-code-front/src/Image/HEADER-IMAGE/restoCodeLogo.png";

const Footer = () => {
  return (
    <footer className="contenedorFooterPrincipal">
      <div className="contenedorDerechos">
        <a className="derechosYpolitica">Todos los derechos reservados ©</a>
        <a className="derechosYpolitica"> Politica de privacidad</a>
      </div>
      <div className="contenedorLogoFooter">
        <img src={logofooter} alt="" />
      </div>
      <div className="contenedorRedes"></div>
    </footer>
  );
};

export default Footer;
