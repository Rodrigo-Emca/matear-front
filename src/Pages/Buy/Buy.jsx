import React from 'react';
import { Link as Anchor} from 'react-router-dom';
import './buy.css';


function Buy() {
const user = JSON.parse(localStorage.getItem('user'));

return (
<div className="buy-container">
<div className='thanks-container'>
<p className='thanks'>Thank you for your purchase <span className='thanks-span'>{user.name}</span>, you will receive an email <span className='thanks-span'>{user.mail}</span> in the next few days.</p>
</div>
<div className="button-container">
<Anchor className='anchor' to="/">Home</Anchor>
<Anchor className='anchor' to="/shop">Shop</Anchor>
</div>
</div>
);
}

export default Buy;