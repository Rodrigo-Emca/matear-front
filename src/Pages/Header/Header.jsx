import React from 'react'
import './header.css'
import ImgHome from '../../Img/LOGO-MATEAR-BLANCO.png'
import { NavLink } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';

export default function Header() {
    return (
        <div className='header-container'>
            <div className='anchor-header'>
                <NavBar />
            </div>
            <div>
                <img className='logo-header' src={ImgHome} alt={ImgHome} />
            </div>
        </div>
    )
}
