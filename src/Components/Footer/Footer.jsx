import React from "react";
import "./footer.css";
import Image from "../Image/Image";
import { Link as Anchor } from "react-router-dom";
import logoMate from "../../Img/LOGO-MATEAR-BLANCO.png";
import mercadopago from "../../Img/mercadopago.png";
// import paypal from "../../Img/paypal.png";
import instagram from "../../Img/instagram.png";
import telefono from "../../Img/telefono.png";
import pindemapa from "../../Img/pindemapa.png";
import correo from "../../Img/correo.png";
import reloj from "../../Img/reloj.png";

function Footer() {
  return (
    <div className="footer">
      <div className="section-contact">
        <div className="termo">
          <Image src={logoMate} alt="Termo" className="img-logo" />
        </div>
        <div className="anchors-pages">
          <Anchor className="anchor" to="./shop">
            Shop
          </Anchor>
          <Anchor className="anchor" to="./about-us">
            About Us
          </Anchor>
          {/* <Anchor className="anchor" to="./contact">
            Contact
          </Anchor> */}
          <Anchor className="anchor" to="./whole-saler">
            WholeSaler
          </Anchor>
        </div>
        <div className="pay">
          <p>Payment Methods</p>
          {/* <Image src={paypal} alt="Paypal" /> */}
          <Image src={mercadopago} alt="MercadoPago" />
        </div>
        <div className="contact-us">
          <div className="cont-footer-contact">
            <Image className="icon-ubicacion" src={pindemapa} />
            <p>BUENOS AIRES</p>
          </div>
          <div className="cont-footer-contact">
            <Image className="instagram" src={telefono} />
            <p>+03355626587</p>
          </div>
          <a
            href="mailto:company-email@correo.com"
            className="cont-footer-contact"
          >
            <Image className="icon-correo" src={correo} />
            company-email@correo.com
          </a>
          <div className="cont-footer-contact">
            <Image className="icon-reloj" src={reloj} />
            <p>10-21hs LUNES A VIERNES / 10-20hs SABADOS</p>
          </div>
          <Anchor to="" className="cont-footer-contact">
            <Image className="icon-instagram" src={instagram} /> @mateAr{" "}
          </Anchor>
        </div>
      </div>
    </div>
  );
}

export default Footer;
