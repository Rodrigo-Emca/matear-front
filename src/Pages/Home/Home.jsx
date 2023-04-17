import React from 'react'
import './home.css'
import ImgFondo from '../../Img/imagen-fondo.jpg'
import ImgFondo2 from '../../Img/img-fondo.jpeg'
import ImgFondo4 from '../../Img/cat-accesorios.jpg'
import ImgFondo5 from '../../Img/mate-paisaje.jpg'
import middleImage from '../../Img/Mid-5000.png'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div className='container-princ'>

            <div className='container-home'>
                <section className="seccion-final">
                    <img
                        id="imageCardGalleria"
                        src={ImgFondo}
                        alt="..." />
                    <img
                        id="imageCardGalleria"
                        src={ImgFondo2}
                        alt="..." />
                    <img
                        id="imageCardGalleria"
                        src={ImgFondo4} alt="..." />
                    <img
                        id="imageCardGalleria"
                        src={ImgFondo5} alt="..." />
                </section>
                
                <div className='home-container'>
                    <motion.p
                        initial={{ scale : 0}}
                        animate={{ scale : 1}}
                        transition={{
                            duration: 0.5,
                        }}
                        className='logo-home'> WELCOME TO MATE.AR</motion.p>
                </div>
                      
            </div>

            <img className='middle-image' src={middleImage} alt="" />

        </div>

    )
}
