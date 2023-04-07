import React from 'react'
import './home.css'
import ImgFondo from '../../Img/imagen-fondo.jpg'
import ImgFondo2 from '../../Img/img-fondo.jpeg'

export default function Home() {
    return (
        <div className='container'>

            <div className='container-home'>
                <img className='img-fondo' src={ImgFondo} alt={ImgFondo}/>
                <img className='img-fondo' src={ImgFondo2} alt={ImgFondo}/>
                <div>

                </div>

            </div>
        </div>

    )
}
