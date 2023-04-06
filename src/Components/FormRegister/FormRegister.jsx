import React, { useRef } from "react";
import "./formRegister.css";
import Wellcome from "../Wellcome/Wellcome";
import Image from "../Image/Image";
import axios from "axios";
import Swal from "sweetalert2";
import google from '../../Img/Google.svg'

export default function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  const addressRef = useRef();
  const mailing_addressRef = useRef();

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

    let url = "http://localhost:8080/api/auth/signup";
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

      Swal.fire({
        title: "User successfully created",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      event.target.reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong Check that inputs are corrects! ",
      });
      console.log("ocurrio un error");
    }
  };

  return (
    <div className="register-fondo">
      <div className="register">
        
        <form className="form" onSubmit={handleSubmit}>
        <Wellcome />
          <label>Name</label>
          <input type="text" name="name" id="name" ref={nameRef} required />

          <label>Email</label>
          <input type="email" name="mail"  ref={emailRef} required />

          <label>Password</label>
          <input
            type="password"
            name="password"
           
            ref={passwordRef}
            required
          />

          <label>Country</label>
          <input
            type="text"
            name="country"
            id="country"
            ref={countryRef}
            required
          />

          <label>Address</label>
          <input type="text" name="address" ref={addressRef} required />

          <label>Mailing Address</label>
          <input
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
              <button type="submit" className="sign-up">
                Sign up
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
            Already have an account?{" "}
            <a href="#" className="link">
              Log in
            </a>
          </p> 
        </form>
      </div>
    </div>
  );
}
