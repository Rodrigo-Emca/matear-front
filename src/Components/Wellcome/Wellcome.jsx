import React from 'react'
import './wellcome.css'

import ImgLogoForm from '../../Img/logoMateAr.png'
import Image from '../Image/Image'

export default function Wellcome() {
    return (
        <section className='welcome-section'>
            <Image className="logo" src={ImgLogoForm} />
            {/* <p>Mateicos</p> */}
        </section>
    )
}