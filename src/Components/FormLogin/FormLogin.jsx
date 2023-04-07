import React, { useRef } from "react";
import "./formLogin.css";
import Wellcome from "../Wellcome/Wellcome";
import Image from "../Image/Image";
import axios from "axios";
import Swal from 'sweetalert2'
import google from '../../Img/Google.svg'
import { NavLink } from "react-router-dom";

export default function Form() {
  
  const emailRef = useRef();
  const passwordRef = useRef();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let data = {
      
        [emailRef.current.name]: emailRef.current.value,
        [passwordRef.current.name]: passwordRef.current.value,
    }
    
    let url = 'http://localhost:8080/api/auth/signin'
    

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
            photo: res.data.user.photo,
            admin
          }))
          setInterval(() => window.location.href = '/', 1000)
        })
        Swal.fire({
          titleText: 'Loggin success',
          icon: 'success',
          confirmButtonText: 'Ok',
          background: 'black',
          customClass: {
            title: 'text-white',
            confirmButton: 'bg-green-500'
          },
          confirmButtonStyles: {
            background: 'red',
            color: 'white'
          }
        });
        

        
        event.target.reset()
    } catch(error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Credentials! ',
          
        })
    }

}

  return (
    <div className="login-fondo">
      <div className="register">
       
        <form className="form"  onSubmit={handleSubmit}>
            <Wellcome />
            <label className="label">Email</label>
            <input type="email" name="mail" id="mail" ref={emailRef}  required />
    
         
            <label className="label">Password</label>
            <input type="password" name="password" id="password" ref={passwordRef}  required />
          
          <div className="buttons-container">
          <div>
            <button type="submit" className="sign-up">
              Sign in
            </button>
          </div>
          <div>
          <a href="#" className="sign-in-google">
          <Image src={google} />
            <span>Sign in with Google</span>
          </a>
          </div>
          </div>
          <p>
          Don't have an account yet?{" "}
            <NavLink to={'/signup'} className="link">
              Register
            </NavLink>
          </p>
         
        </form>
      </div>
    </div>
  );
}