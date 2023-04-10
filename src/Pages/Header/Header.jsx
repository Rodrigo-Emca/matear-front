import React, { useState } from 'react'
import './header.css'
import ImgHome from '../../Img/LOGO-MATEAR-BLANCO.png'
import { NavLink } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import MenuHam from '../../Components/MenuHam/MenuHam';
import iconoMenu from '../../Img/menu-hamburguesa.png'

export default function Header() {
    const [render, setRender] = useState(false);
    function handleRender() {
        setRender(!render)
    }

    return (
        <div className='header-container'>
            <div className='anchor-header'>
                <NavBar  />
            </div>
            <div>
                <img className='logo-header' src={ImgHome} alt={ImgHome} />
            </div>
            <div className='header-menuHamburguesa'>
                <img onClick={handleRender} className="menu" src={iconoMenu} alt="menu-hamburguesa" />
                {render ? <MenuHam handleRender={handleRender} /> : ""}
                
            </div>
        </div>
    )
}
