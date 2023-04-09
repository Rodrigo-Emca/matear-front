import React, { useState, useEffect } from 'react';
import './cartButton.css';
import carritoImg from '../../Img/carrito-de-compras.png';

export default function CartButton(props) {

    const [pressed, setPressed] = useState(false);

    useEffect(() => {
        const cartItemKey = `cartItem${props.product.idProduct}`;
        const cartItemExists = localStorage.getItem(cartItemKey) !== null;
        setPressed(cartItemExists);
    }, [props.product.idProduct]);

    const handleClick = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        const existingKeys = Object.keys(localStorage).filter((key) =>
            key.startsWith('cartItem')
        );

        if (cartItems) {
            let itemExists = false;

            // Check if item already exists in cart
            existingKeys.forEach((key) => {
                const item = JSON.parse(localStorage.getItem(key));
                if (item.product.idProduct === props.product.idProduct) {
                    localStorage.removeItem(key);
                    setPressed(false);
                    itemExists = true;
                }
            });

            if (!itemExists) {
                const cartItemCount = existingKeys.length + 1;
                const newItemKey = `cartItem${props.product.idProduct}`;
                localStorage.setItem(newItemKey, JSON.stringify(props));
                setPressed(true);
            }
        } else {
            const newItemKey = `cartItem${props.product.idProduct}`;
            localStorage.setItem(newItemKey, JSON.stringify(props));
            setPressed(true);
        }
    };

    const buttonClass = `cart-button${pressed ? ' pressed' : ''}`;

    return (
        <button onClick={handleClick} className={buttonClass}>
            <img src={carritoImg} alt="shopping cart" className="imagenCarrito" />
        </button>
    );
}
