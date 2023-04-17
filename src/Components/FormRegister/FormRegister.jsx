import React, { useRef, useEffect } from "react";
import "./formRegister.css";
// import Wellcome from "../Wellcome/Wellcome";
import Image from "../Image/Image";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import google from '../../Img/Google.svg'
import { NavLink } from "react-router-dom";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from 'react-router';

export default function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  const addressRef = useRef();
  const mailing_addressRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      [nameRef.current.name]: nameRef.current.value,
      [emailRef.current.name]: emailRef.current.value,
      [countryRef.current.name]: countryRef.current.value,
      [addressRef.current.name]: addressRef.current.value,
      [mailing_addressRef.current.name]: mailing_addressRef.current.value,
      [passwordRef.current.name]: passwordRef.current.value,
    };

    let url = "https://matear-back.onrender.com/api/auth/signup";
    console.log(data);

    if (data.name.length < 3) {
      Swal.fire("Name must be at least 3 characters long");
      return;
    }

    if (data.password.length < 8) {
      Swal.fire("Password must be at least 8 characters long");
      return;
    }
    try {
      await axios.post(url, data);

      toast.success('User successfully created')
      event.target.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
      console.log("ocurrio un error");
    }

    
  };
  const clientID =
    "565189616801-1du0ps5k1l6v18edj9m370d6ra9kt3v4.apps.googleusercontent.com";

    useEffect(() => {
      const start = () => {
        gapi.auth2.init({
          clientId: clientID,
        });
      };
      gapi.load("client:auth2", start);
    }, []); 
    const onSuccess = async (response) => {
      console.log(response);
      try {
        const { name ,email,  googleId } = response.profileObj;
  
        const data = {
          name: name,
          mail: email,
        
          password: googleId,
        };
        console.log(data.name);
        const url = "https://matear-back.onrender.com/api/auth/signup";
        await axios.post(url, data);
        toast.success('User successfully created')
        
        
        navigate("/");
      } catch (error) {
        console.error(error);
        let errorMessage = "";
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          if (typeof error.response.data.message === "string") {
            errorMessage = error.response.data.message;
          } else {
            errorMessage = error.response.data.message.join(" ");
          }
        } else {
          errorMessage = "Se produjo un error al procesar la solicitud.";
        }
        console.log(errorMessage);
        toast.error('Something went wrong')
        
      }
    };
    const onFailure = () => {
      console.log("Something went wrong");
    };



  return (
    <div className="register-dad">
        <form className="form-register" onSubmit={handleSubmit}>
          {/* <Wellcome /> */}
          <label>Name</label>
          <input className="register-name" type="text" name="name" id="name" ref={nameRef} required />

          <label>Email</label>
          <input className="register-email" type="email" name="mail"  ref={emailRef} required />

          <label>Password</label>
          <input
            type="password"
            name="password"
            className="register-password"
            ref={passwordRef}
            required
          />

          <label>Country</label>
          <input className="register-country"
            type="text"
            name="country"
            id="country"
            ref={countryRef}
            required
          />

          <label>Address</label>
          <input className="register-address" type="text" name="address" ref={addressRef} required />

          <label>Mailing Address</label>
          <input className="register-mailing-address"
            type="text"
            name="mailing_address"
            ref={mailing_addressRef}
            required
          />

          {/* <fieldset className="notification-check">
            <input
              type="checkbox"
              name="email-notification"
              id="email-notification"
            />
            <label htmlFor="email-notification">
              Send notification to my email
            </label>
          </fieldset> */}
          <div className="buttons-container">
            <div>
              <button type="submit" className="sign-up"
              >
                Sign up
              </button>
            </div>
            <GoogleLogin
          
          
          text="Sign in with Google"
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"sigle_host_policy"}
        />
          </div>
          <p>
            Already have an account?{" "}
            
            <NavLink to={'/signin'} className="ancor-register">
              Log in
            </NavLink>
          </p> 
        </form>
    </div>
  );
}