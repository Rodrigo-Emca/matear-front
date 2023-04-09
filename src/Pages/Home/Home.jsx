import React from 'react'
import './home.css'
import ImgFondo from '../../Img/imagen-fondo.jpg'
import ImgFondo2 from '../../Img/img-fondo.jpeg'
import ImgFondo3 from '../../Img/cat-exclusivos.jpg'
import ImgFondo4 from '../../Img/cat-accesorios.jpg'
import ImgFondo5 from '../../Img/mate-paisaje.jpg'
import ImgFondo6 from '../../Img/piedra-mate.jpg'
import ImgFondo7 from '../../Img/yerba-2.jpeg'
import ImgFondo8 from '../../Img/yerba-mate-fondo.jpg'
import ImgFondo9 from '../../Img/mateLogin.png'
import ImgFondo10 from '../../Img/cat-mates.jpg'
import ImgFondo11 from '../../Img/cat-accesorios.jpg'
import ImgLogo from '../../Img/LOGO-MATEAR-NEGRO2.png'
export default function Home() {
    return (
        <div className='container-princ'>

            <div className='container-home'>
                <section class="seccion-final">
                    <img
                        id="imageCardGalleria"
                        src={ImgFondo}
                        alt="..." />
                    <img
                        id="imageCardGalleria"
                        src={ImgFondo2}
                        alt="..." />
                    {/* <img
                        // id="imageCardGalleria"
                        src={ImgFondo3}
                        alt="..." /> */}
                    <img
                        id="imageCardGalleria"
                        src={ImgFondo4} alt="..." />
                    <img
                        id="imageCardGalleria"
                        src={ImgFondo5} alt="..." />
                </section>
                
                <div className='home-container'>
                    <p className='logo-home'> WELCOME TO MATE.AR</p>
                </div>
                

            </div>
        </div>

    )
}
