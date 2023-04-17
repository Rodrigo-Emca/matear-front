import React, {useState, useEffect} from 'react';
import { Link as Anchor } from 'react-router-dom';
import './productCard.css';
import CartButton from '../CartButton/CartButton';

export default function ProductCard(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [areProductsVisible, setAreProductsVisible] = useState(false); // Define la variable
    const token = localStorage.getItem('token');
    const description =
        props.product_id.description.length > 135
        ? `${props.product_id.description.slice(0, 135)} (...)`
        : props.product_id.description;

    let stockText = '';
    if (props.product_id.stock === 0) {
        stockText = 'Momentarily out of stock';
    } else if (props.product_id.stock < 5) {
        stockText = 'Last ' + `${props.product_id.stock}` + ' units available';
    } else {
        stockText = `${props.product_id.stock} units`;
    }


    useEffect(() => {
        setIsVisible(false);
        if (areProductsVisible) {
          setTimeout(() => setIsVisible(true), 100);
        }
      }, [areProductsVisible, props.reload]);

    useEffect(() => {
        setAreProductsVisible(true); // Define la variable como verdadera al cargar el componente
    }, []);

    return (
        <div className={`container product-card ${isVisible ? 'visible' : ''}`}>
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
                        <Anchor to={`/details/${props.idProduct}`} className="detail-shop" >
                            Details
                        </Anchor>
                        {token && props.product_id.stock !== 0 && <CartButton product={props} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}