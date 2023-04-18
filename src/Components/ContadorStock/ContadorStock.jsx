import React from 'react';
import './contadorstock.css';
import { BsTrash3 } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import { BiMinusCircle } from 'react-icons/bi'

export default function ContadorStock(props) {
    const { index, count, incrementCount, decrementCount, outOfStock, removeItem } = props;

    return (
        <div className='countContainer'>
            <div className='count-product'>
                <BiMinusCircle className='countButtonMinus'
                    onClick={() => decrementCount(index)}
                    disabled={count === 1 || outOfStock} />

                <span className='countNumber'>{count}</span>

                <GrAddCircle className='countButtonMore'
                    onClick={() => incrementCount(index)}
                    disabled={outOfStock} />
            </div>
            <BsTrash3 className='countButtonReset' onClick={() => removeItem()} />
        </div>
    );
}
