import React from "react";
import "./footer.css";
import Image from "../Image/Image";
import { Link as Anchor } from "react-router-dom";
import logoMate from "../../Img/logo-matear-no-borders-white.png";
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
      <div className="section-map-desc">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.47497046794!2d-58.59811171411622!3d-34.61543034822564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1680809010312!5m2!1ses!2sar"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="description">
          <p id="wellcome">
            Our business is located in the heart of the city, just a few blocks
            away from the main square. You can find us at 123 Main Street, near
            the corner of Broadway and Main. We're easily accessible by public
            transportation and there is ample parking nearby. We look forward to
            seeing you soon!
          </p>
        </div>
      </div>
      <div className="section-contact">
        <div className="termo">
          <Image src={logoMate} alt="Termo" className="img-logo" />
        </div>
        <div className="anchors-pages">
          <Anchor className="anchor" to="./store">
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
            <p>BUENOS AIRES ESQ LARRAÑACA</p>
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
