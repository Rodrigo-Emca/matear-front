import React from 'react'
import './wellcome.css'

import ImgLogoForm from '../../Img/MATE.AR-NEGRO-LOGO.png'

export default function Wellcome() {
    return (
        <div className='welcome-section'>
            <img className='logo-size' src={ImgLogoForm} alt="logo-img" />
        </div>
    )
}