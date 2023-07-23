import "./Footer.css";
import logofooter from "C:/Users/Usuario/Desktop/RestoCodeFront/resto-code-front/src/Image/HEADER-IMAGE/restoCodeLogo.png";

const Footer = () => {
  return (
    <footer className="contenedorFooterPrincipal">
      <div className="contenedorRedes"></div>
      <div className="contenedorLogoFooter">
        <img src={logofooter} alt="" />
      </div>
      <div className="contenedorDerechos"></div>
    </footer>
  );
};

export default Footer;
