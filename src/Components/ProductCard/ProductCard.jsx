import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import './productCard.css';
import CartButton from '../CartButton/CartButton';

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
                        <h1>{props.product_id.title}</h1>
                        <p>$ {parseFloat(props.product_id.price).toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 3 })} ARS</p>
                        <p>Available: {stockText}</p>
                        <div className="contenedorDetails">
                        <Anchor to={`/details/${props.idProduct}`} className="detail-shop">
                            Details
                        </Anchor>
                        {props.product_id.stock !== 0 && <CartButton product={props} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}