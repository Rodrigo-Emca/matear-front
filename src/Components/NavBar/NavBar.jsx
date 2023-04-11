import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import shoppingCartIcon from '../../Img/carrito.png';
import perfile  from '../../Img/profile.png';
import logout  from '../../Img/logout.png';

import axios from 'axios'

import Swal from 'sweetalert2'





export default function NavBar({ handleRender }) {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let url = 'https://matear-back.onrender.com/api/auth/signout'

    async function handleLogout(){
        try{
            await axios.post(url,"",headers)
            Swal.fire({
                title: 'Logout Succefull',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            localStorage.setItem('token', "")
            localStorage.setItem('user', "")
            handleRender()
          }catch(error){
            console.log(error)

        }      
    }

    

    return (
        <>
        <div className='anchor-header'>
            <NavLink to={'/home'} className='link-home'>
            Home
            </NavLink>
            <NavLink to={'/shop'} className='link-home'>
            Shop
            </NavLink>
           
            <NavLink className='link-home'>Contact</NavLink>
            {token ? (
        <>
          <NavLink to={'/shoppingcart'}>
            <img src={shoppingCartIcon} alt='Shopping cart icon' className='carritoCompras'/>
          </NavLink>
          <NavLink to={'/profile'}>
          <img src={perfile}  style={{ width: '30px', height: '30px' }} alt='Perfil icon' className='perfil-Icon'/>
          </NavLink>
          <NavLink to={'/home'}>
          <img src={logout}  style={{ width: '30px', height: '30px' }} alt='Perfil icon' className='log-out-icon'  onClick={handleLogout}/>
          </NavLink>
        </>
      ) : (
        <NavLink to={'/signin'} className='link-home'>
          Login
        </NavLink>
      )}
    </div>
        </>
    );
}

