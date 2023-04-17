import React from 'react';
import './contadorstock.css';

export default function ContadorStock(props) {
    const { index, count, incrementCount, decrementCount, outOfStock, removeItem } = props;

    return (
        <div className='countContainer'>
        <div>   
            <button
                className='countButtonMore'
                onClick={() => decrementCount(index)}
                disabled={count === 1 || outOfStock}
                >
                -
            </button>
            <span className='countNumber'>{count}</span>
            <button
            className='countButtonMore'
            onClick={() => incrementCount(index)}
            disabled={outOfStock}
            >
            +
            </button>
        </div>
        <button
            className='countButtonReset'
            onClick={() => removeItem()}
        >
            Remove Item
        </button>
        </div>
    );
}
