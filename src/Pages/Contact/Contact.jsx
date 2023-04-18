import React from "react";
import "./contact.css";
// import imgHome1 from "../../Img/yerba-mate-fondo.jpg";
import imgContact2 from "../../Img/Termo-de-acero-inoxidable.png";

export default function Contact() {
  return (
    <div className="cont-contact">
      <div className="cont-part-2">
        <div className="info-one">
          <img src={imgContact2} alt="Termo y mate" className="imgHomeWidth" />
          <p className="color-black p-space-home">We are proud to offer the highest quality thermos and mate products on the market. Our business was born out of a love for the rich culture and tradition of sharing mate with friends and family. We understand that mate is not just a drink, but a way of life for many people around the world, and we are committed to providing the to and accessories necessary to enjoy this experience to the fullest.
          </p>
        </div>
      </div>
      <div className="section-map-desc">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.47497046794!2d-58.59811171411622!3d-34.61543034822564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1680809010312!5m2!1ses!2sar"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="description">
          <p id="wellcome">
            Our business is located in the heart of the city, just a few blocks away from the main square. You can find us at Buenos Aires Main Street. We're easily accessible by public transportation and there is ample parking nearby. We look forward to seeing you soon!
          </p>
        </div>
      </div>
    </div>
  );
}
