import React, { useRef } from "react";
import "./formLogin.css";
import Wellcome from "../Wellcome/Wellcome";
import Image from "../Image/Image";
import axios from "axios";
import google from '../../Img/Google.svg'
import { NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


export default function Form() {
  
  const emailRef = useRef();
  const passwordRef = useRef();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let data = {
      
        [emailRef.current.name]: emailRef.current.value,
        [passwordRef.current.name]: passwordRef.current.value,
    }
    
    let url = 'https://matear-back.onrender.com/api/auth/signin'
    

    let admin
    try {
      await axios.post(url, data)
        .then(res => {
          res.data.user.is_admin ? (admin=true) : (admin=false)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', JSON.stringify({
            id: res.data.user._id,
            name: res.data.user.name,
            mail: res.data.user.mail,
            country: res.data.user.country,
            address: res.data.user.address,
            mailing_address: res.data.user.mailing_address,
            admin
          }))
          setInterval(() => window.location.href = '/', 1000)
        })
        toast.success('Loggin success')
       
       
        event.target.reset()
    } catch(error) {
       
        if (error.response.data === 'Unauthorized') {
          toast.error('You need to Login')
      } else {
          if (typeof error.response.data.message === 'string') {
              toast.error(error.response.data.message)
          } else {
              error.response.data.message.forEach(err => toast.error(err))
          }

      }
    }

}

return (
  <div className="login-fondo">
    <div className="login">
     
      <form className="form-login"  onSubmit={handleSubmit}>
          <Wellcome />
          <label className="color-white">Email</label>
          <input className="email-login" type="email" name="mail" id="mail" ref={emailRef}  required />
  
       
          <label className="color-white">Password</label>
          <input className="password-login" type="password" name="password" id="password" ref={passwordRef}  required />
        
        <div className="buttons-container">
        <div>
          <button type="submit" className="sign-in">
            Sign in
          </button>
        </div>
        <div>
        <a href="#" className="sign-in-google">
        <Image src={google} />
          <span className="color-black">Sign in with Google</span>
        </a>
        </div>
        </div>
        <p className="p-login-register">
        Don't have an account yet?{" "}
          <NavLink to={'/signup'} className="ancor-register">
            Register
          </NavLink>
        </p>
       
      </form>
    </div>
    <Toaster />
  </div>
);
}