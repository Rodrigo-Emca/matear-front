import React from 'react'
import './header.css'
import ImgHome from '../../Img/logoMateAr.png'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-container'>
            <div className='anchor-header'>
                {/* <Anchor to={'/home'} className='link'>Home</Anchor> */}
                <NavLink to={'/home'} className='link'>Home</NavLink>
                <NavLink to={'/shop'} className='link'>Shop</NavLink>
                <NavLink className='link'>About Us</NavLink>
                <NavLink className='link'>Contact</NavLink>
                <NavLink to={'/signin'} className='link'>Login</NavLink>
            </div>
            <div>
                <img className='logo-header' src={ImgHome} alt={ImgHome} />
            </div>
        </div>
    )
}
