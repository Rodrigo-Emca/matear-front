import React from 'react'
import { NavLink } from 'react-router-dom';
import './menuham.css'
import { BiCart } from "react-icons/bi"
import { useDispatch } from "react-redux";
import logoutActions from '../../Store/LogoutReload/actions';
import axios from 'axios'
import Swal from 'sweetalert2'

const { logoutReload } = logoutActions

export default function MenuHam({ handleRender }) {
    const token = localStorage.getItem('token');

    const dispatch = useDispatch();

    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let url = 'https://matear-back.onrender.com/api/auth/signout'

    async function handleLogout() {
        try {
            await axios.post(url, "", headers)
            Swal.fire({
                title: 'Logout Succefull',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            dispatch(logoutReload({ state: true }))
            window.location.reload();
        } catch (error) {
            console.log(error)

        }
    }


    return (
        <nav className='nav-container'>
            <div className="profile">
                <div className="img-text-container">
                    <span onClick={handleRender}>
                        <svg
                            width=""
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.70708 0.292893C1.31655 -0.097631 0.683389 -0.0976311 0.292864 0.292893C-0.0976599 0.683417 -0.0976601 1.31658 0.292864 1.70711L5.58571 6.99996L0.292771 12.2929C-0.0977531 12.6834 -0.0977531 13.3166 0.292771 13.7071C0.683295 14.0976 1.31646 14.0976 1.70698 13.7071L6.99992 8.41417L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41414 6.99996L13.707 1.70711C14.0975 1.31658 14.0975 0.683419 13.707 0.292895C13.3165 -0.0976298 12.6833 -0.0976294 12.2928 0.292895L6.99992 5.58574L1.70708 0.292893Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                </div>

                <div className="a-links">
                    <NavLink to={'/home'} className='a-menu'>
                        Home
                    </NavLink>
                    <NavLink to={'/shop'} className='a-menu'>
                        Shop
                    </NavLink>
                    {token ? <NavLink to={'/shoppingcart'}>
                        <BiCart className='carrito-hamburguesa' />
                    </NavLink> : ""}
                    {token ? <NavLink to={'/profile'} className='a-menu'>Profile </NavLink> : ""}
                    {token ? <NavLink className='a-menu' onClick={handleLogout}>Logout</NavLink> : ""}
                    <NavLink className='a-menu'>About Us</NavLink>
                    <NavLink className='a-menu'>Contact</NavLink>
                    {token ? "" : <NavLink to={'/signin'} className='a-menu'> Login </NavLink>}

                </div>
            </div>
        </nav>
    )
}
