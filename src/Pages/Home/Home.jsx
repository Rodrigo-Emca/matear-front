import React from "react";
import "./home.css";
import ImgFondo from "../../Img/imagen-fondo.jpg";
import ImgFondo2 from "../../Img/img-fondo.jpeg";
import ImgFondo4 from "../../Img/cat-accesorios.jpg";
import ImgFondo5 from "../../Img/mate-paisaje.jpg";
import middleImage from "../../Img/Mid-5000.png";
import imgHome1 from '../../Img/yerba-mate-fondo.jpg'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container-princ">
      <div className="container-home">
        <section className="seccion-final">
          <img id="imageCardGalleria" src={ImgFondo} alt="..." />
          <img id="imageCardGalleria" src={ImgFondo2} alt="..." />
          <img id="imageCardGalleria" src={ImgFondo4} alt="..." />
          <img id="imageCardGalleria" src={ImgFondo5} alt="..." />
        </section>

        <div className="home-container">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
            }}
            className="logo-home"
          >
            {" "}
            WELCOME TO MATE.AR
          </motion.p>
        </div>
      </div>

      <img className="middle-image" src={middleImage} alt="" />
      <div className="cont-part-2">
        <div className="info-one">
          <img src={imgHome1} alt="Yerba mate" className="imgHomeWidth" />
          <p className="color-black p-space-home">
            We are proud to offer the highest
            quality thermos and mate products on the market. Our business was
            born out of a love for the rich culture and tradition of sharing
            mate with friends and family. We understand that mate is not just a
            drink, but a way of life for many people around the world, and we
            are committed to providing the tools and accessories necessary to
            enjoy this experience to the fullest.
          </p>
        </div>
      </div>
    </div>
  );
}
