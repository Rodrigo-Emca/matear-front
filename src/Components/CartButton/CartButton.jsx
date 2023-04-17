import React, { useState, useEffect } from 'react';
import './cartButton.css';
import { BiCart } from "react-icons/bi"
import { GiShoppingCart } from "react-icons/gi"

export default function CartButton(props) {

    const [pressed, setPressed] = useState(false);

    useEffect(() => {
        const cartItemKey = `cartItem${props.product.idProduct}`;
        const cartItemExists = localStorage.getItem(cartItemKey) !== null;
        setPressed(cartItemExists);
    }, [props.product.idProduct]);

    const handleClick = () => {
        const cartItemKey = `cartItem${props.product.idProduct}`;
        const cartItemExists = localStorage.getItem(cartItemKey) !== null;
    
        if (cartItemExists) {
            localStorage.removeItem(cartItemKey);
            setPressed(false);
        } else {
            localStorage.setItem(cartItemKey, JSON.stringify(props));
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