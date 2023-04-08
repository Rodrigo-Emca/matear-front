import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'

export default function NavBar() {
    return (
        <>
            <div className='anchor-header'>
                <NavLink to={'/home'} className='link-home'>Home</NavLink>
                <NavLink to={'/shop'} className='link-home'>Shop</NavLink>
                <NavLink className='link-home'>About Us</NavLink>
                <NavLink className='link-home'>Contact</NavLink>
                <NavLink to={'/signin'} className='link-home'>Login</NavLink>
            </div>
        </>
    )
}
