import React from 'react';
import MateLogin from '../../Img/imagen-fondo.jpg'
import FormLogin from '../../Components/FormLogin/FormLogin';
import './login.css'

function Login() {
    return (
        <>
            <div className='conteiner-login'>

			    <div className="img-form-login">
                </div>
			    <div className='conteiner-form-login'>
                    <FormLogin />
			    </div>

            </div>
        </>
    );
}

export default Login;