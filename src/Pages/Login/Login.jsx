import React from 'react';
import MateLogin from '../../Img/mateLogin.png'
import FormLogin from '../../Components/FormLogin/FormLogin';
import './login.css'

function Login() {
    return (
        <div>
          
            <div className='conteiner'>
            <div className='conteiner-img'>
			<img className="img-form" src={MateLogin}alt="login" />
			</div>
			<div className='conteiner-form'>
            <FormLogin />
			</div>	
			
            </div>
        </div>
    );
}

export default Login;