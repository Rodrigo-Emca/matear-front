import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import './productCard.css';
import logoWhite from '../../Img/logo-white.png';
import logoblack from '../../Img/logo-black.png';
import CartButton from '../CartButton/CartButton';
import favoriteIcon from '../../Img/corazon.png';

export default function ProductCard(props) {
    const description =
        props.product_id.description.length > 135
        ? `${props.product_id.description.slice(0, 135)} (...)`
        : props.product_id.description;

    let stockText = '';
    if (props.product_id.stock === 0) {
        stockText = 'Momentaneamente sin Stock';
    } else if (props.product_id.stock < 5) {
        stockText = 'Ultimas ' + `${props.product_id.stock}` + ' unidades disponibles';
    } else {
        stockText = `${props.product_id.stock} units`;
    }

    return (
        <div className="container">
            <div className="card">
                <div className="image">
                <img src={props.product_id.cover_photo} alt="imagen" />
                </div>
                <div className="details">
                    <div className="center">
                        {/* <img src={logoblack} alt="logo" className='logoMate'/> */}
                        <h1>{props.product_id.title}</h1>
                        {/* <h5>{description}</h5> */}
                        <p>$ {parseFloat(props.product_id.price).toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 3 })} ARS</p>
                        {/* <p>$ {props.product_id.price} ARS</p> */}
                        {/* <p>$ {props.product_id.price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} ARS</p> */}
                        <p>Available: {stockText}</p>
                        <div className="contenedorDetails">
                        <Anchor to={`/details/${props.idProduct}`} className="">
                            Details
                        </Anchor>
                        {props.product_id.stock !== 0 && <CartButton product={props} />}
                        {/* <img src={favoriteIcon} alt='favorite icon' className='favorite-icon' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
