import React from 'react';
import MateLogin from '../../Img/mateLogin.png'
import FormLogin from '../../Components/FormLogin/FormLogin';
import './login.css'

function Login() {
    return (
        <>
            <div className='conteiner-login'>

			    <img className="img-form-login" src={MateLogin}alt="login" />
                
			    <div className='conteiner-form-login'>
                    <FormLogin />
			    </div>

            </div>
        </>
    );
}

export default Login;