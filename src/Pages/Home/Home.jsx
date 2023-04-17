import React from "react";
import "./home.css";
import ImgFondo from "../../Img/imagen-fondo.jpg";
import ImgFondo2 from "../../Img/img-fondo.jpeg";
import ImgFondo4 from "../../Img/cat-accesorios.jpg";
import ImgFondo5 from "../../Img/mate-paisaje.jpg";
import middleImage from "../../Img/Mid-5000.png";
import imgHome1 from "../../Img/yerba-mate-fondo.jpg";
import paso1 from '../../Img/paso-1.png'
import paso2 from '../../Img/paso-2.png'
import paso3 from '../../Img/paso-3.png'
import paso4 from '../../Img/paso-4.png'
import paso5 from '../../Img/paso-5.png'
import paso6 from '../../Img/paso-6.png'
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
                className="logo-home">
                {" "}
                WELCOME TO MATE.AR
            </motion.p>
            </div>
        </div>

        <img className="middle-image" src={middleImage} alt="" />

        <div className="cont-part-2">
            <div className="info-one">
                <img src={imgHome1} alt="Yerba mate" className="imgHomeWidth" />
                <p className="color-black p-space-home"> We are proud to offer the highest quality thermos and mate products on the market. Our business was born out of a love for the rich culture and tradition of sharing mate with friends and family. We understand that mate is not just a drink, but a way of life for many people around the world, and we are committed to providing the to and accessories necessary to enjoy this experience to the fullest.</p>
            </div>
        </div>

        <h1 className="center-h2">How to prepare a good Argentine mate?</h1>
        <div className="prepare-mate">
            <div className="prepare-mate-pass">
                <img src={paso1} alt="" className="pasesImg"/>
                <div>
                    <h2>1. Fill the mate with yerba</h2>
                    <p className="color-black p-width">Fill up to three-quarters of the mate with the yerba of your choice. There are many varieties to choose from: with stems, without stems, flavored, blended.</p>
                </div>
            </div>
            <div className="prepare-mate-pass">
                <div>
                    <h2>2. Cover and mix well.</h2>
                    <p className="color-black p-width">Cover the mouth of the mate with your hand and vigorously shake it to form the space where the bombilla will be placed and to mix well its components: leaf powder, stems, and ground leaves.
                    This ensures more efficient and evenly flavored mates</p>
                </div>
                <img src={paso2} alt="" className="pasesImg"/>
            </div>
            <div className="prepare-mate-pass">
                <img src={paso3} alt="" className="pasesImg"/>
                <div>
                    <h2>3. Form space for the bombilla.</h2>
                    <p className="color-black p-width">When we finish shaking the mate, there will be a space where we will later place the bombilla. Yerba mate contains dust, a valuable component: it is normal for a little to remain on the palm of the hand.</p>
                </div>
            </div>
            <div className="prepare-mate-pass">
                <div>
                    <h2>4. Start with warm water.</h2>
                    <p className="color-black p-width">Pour a little warm water and wait 1 minute for the yerba to infuse.</p>
                </div>
                <img src={paso4} alt="" className="pasesImg"/>
            </div>
            <div className="prepare-mate-pass">
                <img src={paso5} alt="" className="pasesImg"/>
                <div>
                    <h2>5. Place the bombilla.</h2>
                    <p className="color-black p-width">Carefully place the bombilla. It is not necessary to cover its mouth.</p>
                </div>
            </div>
            <div className="prepare-mate-pass">
                <div>
                    <h2>6. Start pouring water.</h2>
                    <p className="color-black p-width">We can start now, using hotter water (up to around 75º C / 167°F) and pouring a small amount close to the bombilla so as not to wet all the yerba</p>
                </div>
                <img src={paso6} alt="" className="pasesImg"/>
            </div>
        </div>
    </div>
  );
}
