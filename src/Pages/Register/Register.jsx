import React from 'react';
import MateRegister from '../../Img/mateRegister.png'
import FormRegister from '../../Components/FormRegister/FormRegister.jsx'
import './register.css'

function Register() {
    return (
		<div>
          
		<div className='conteiner'>
		<div className='conteiner-img'>
		<img className="img-form" src={MateRegister}alt="login" />
		</div>
		<div className='conteiner-form'>
		<FormRegister />
		</div>	
		
		</div>
	</div>
       
    );
}

export default Register;