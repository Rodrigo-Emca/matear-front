import React from 'react'
import './header.css'
import ImgHome from '../../Img/logoMateAr.png'
import { Link as Anchor } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header-container'>
            <div className='anchor-header'>
               <Anchor className='link'>Home</Anchor>
               <Anchor className='link'>Shop</Anchor>
               <Anchor className='link'>About Us</Anchor>
               <Anchor className='link'>Contact</Anchor>
               <Anchor className='link'>Login</Anchor>
            </div>
            <div>
                <img className='logo-header' src={ImgHome} alt={ImgHome} />
            </div>
        </div>
    )
}
