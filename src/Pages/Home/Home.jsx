import React from 'react'
import './home.css'
import ImgFondo from '../../Img/imagen-fondo.jpg'
import ImgFondo2 from '../../Img/img-fondo.jpeg'
import ImgFondo4 from '../../Img/cat-accesorios.jpg'
import ImgFondo5 from '../../Img/mate-paisaje.jpg'

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
