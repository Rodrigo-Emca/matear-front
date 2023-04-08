import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import './productCard.css';
import logoWhite from '../../Img/logo-white.png'
import logoblack from '../../Img/logo-black.png'
import carritoImg from '../../Img/carrito-de-compras.png'
import favoriteIcon from '../../Img/corazon.png'

export default function ProductCard(props) {
    const description =
        props.product_id.description.length > 150
        ? `${props.product_id.description.slice(0, 150)} (...)`
        : props.product_id.description;

    return (
        <div className='container'>
            <div className='card'>
                <div className='image'>
                    <img src={props.product_id.cover_photo} alt='imagen' />
                    
                </div>
                <div className='details'>
                    <div className='center'>
                        {/* <img src={logoblack} alt="logo" className='logoMate'/> */}
                        <h1>{props.product_id.title}</h1>
                        <h5>{description}</h5>
                        <p>$ {props.product_id.price} ARS</p>
                        <p>Available: {props.product_id.stock} units</p>
                        <div className='contenedorDetails'>
                            <Anchor to={`/details/${props.idProduct}`} className=''>Details</Anchor>
                            <img src={carritoImg} alt="" className='imagenCarrito'/>
                            {/* <img src={favoriteIcon} alt='favorite icon' className='favorite-icon' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}