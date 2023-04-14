import React, { useState, useEffect } from 'react';
import './cartButton.css';
import { BiCart } from "react-icons/bi"

export default function CartButton(props) {
    console.log(props.product)

    const [pressed, setPressed] = useState(false);

    useEffect(() => {
        const cartItemKey = `cartItem${props.product.id}`;
        const cartItemExists = localStorage.getItem(cartItemKey) !== null;
        setPressed(cartItemExists);
    }, [props.product.id]);

    const handleClick = () => {
        const cartItemKey = `cartItem${props.product.id}`;
        const cartItemExists = localStorage.getItem(cartItemKey) !== null;
    
        if (cartItemExists) {
            localStorage.removeItem(cartItemKey);
            setPressed(false);
        } else {
            localStorage.setItem(cartItemKey, JSON.stringify(props.product));
            setPressed(true);
        }
    };
    

    const buttonClass = `cart-button${pressed ? ' pressed' : ''}`;

    return (
        <button onClick={handleClick} className={buttonClass}>
            <BiCart className='carrito-shop'/>
        </button>
    );
}