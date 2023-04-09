import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import shoppingCartIcon from '../../Img/carrito.png';

export default function NavBar() {
    const token = localStorage.getItem('token');

    return (
        <>
        <div className='anchor-header'>
            <NavLink to={'/home'} className='link-home'>
            Home
            </NavLink>
            <NavLink to={'/shop'} className='link-home'>
            Shop
            </NavLink>
            <NavLink className='link-home'>About Us</NavLink>
            <NavLink className='link-home'>Contact</NavLink>

            {token ? (
            <NavLink to={'/shoppingcart'}>
                <img src={shoppingCartIcon} alt='Shopping cart icon' className='carritoCompras'/>
            </NavLink>
            ) : (
            <NavLink to={'/signin'} className='link-home'>
                Login
            </NavLink>
            )}
        </div>
        </>
    );
}

