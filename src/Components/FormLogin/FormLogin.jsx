import React, { useRef, useEffect } from "react";
import "./formLogin.css";
import Wellcome from "../Wellcome/Wellcome";
import Image from "../Image/Image";
import axios from "axios";
import toast from "react-hot-toast";
import google from "../../Img/Google.svg";
import { NavLink } from "react-router-dom";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";

export default function Form() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      [emailRef.current.name]: emailRef.current.value,
      [passwordRef.current.name]: passwordRef.current.value,
    };

    let url = "https://matear-back.onrender.com/api/auth/signin";

    let admin;
    try {
      await axios.post(url, data).then((res) => {
        res.data.user.is_admin ? (admin = true) : (admin = false);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: res.data.user._id,
            name: res.data.user.name,
            mail: res.data.user.mail,
            country: res.data.user.country,
            address: res.data.user.address,
            mailing_address: res.data.user.mailing_address,
            admin,
          })
        );
        setInterval(() => (window.location.href = "/"), 1000);
      });
      toast.success("Loggin success");

      event.target.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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

  let admin;
  const onSuccess = async (response) => {
    console.log(response);
    try {
      const { email, googleId } = response.profileObj;

      const data = {
        mail: email,
        password: googleId,
      };
      console.log(data);
      let url = "https://matear-back.onrender.com/api/auth/signin";
      await axios.post(url, data).then((res) => {
        res.data.user.is_admin ? (admin = true) : (admin = false);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: res.data.user._id,
            name: res.data.user.name,
            mail: res.data.user.mail,
            country: res.data.user.country,
            address: res.data.user.address,
            mailing_address: res.data.user.mailing_address,
            admin,
          })
        );
        toast.success("Loggin success");
        setInterval(() => (window.location.href = "/"), 1000);
      });
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
      toast.error("Something went wrong");
    }
  };
  const onFailure = () => {
    console.log("Something went wrong");
  };

  return (
    <div className="login-fondo">
      <div className="login">
        <form className="form-login" onSubmit={handleSubmit}>
          <Wellcome />
          <label className="color-white">Email</label>
          <input
            className="email-login"
            type="email"
            name="mail"
            id="mail"
            ref={emailRef}
            required
          />

          <label className="color-white">Password</label>
          <input
            className="password-login"
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            required
          />

          <div className="buttons-container">
            <div>
              <button type="submit" className="sign-in">
                Sign in
              </button>
            </div>
            <GoogleLogin
              className="sign-in-google"
              text="Sign in with Google"
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"sigle_host_policy"}
            />
          </div>
          <p className="p-login-register">
            Don't have an account yet?{" "}
            <NavLink to={"/signup"} className="ancor-register">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
