import React from 'react';

export default function ContadorStock(props) {
    const { index, count, incrementCount, decrementCount, outOfStock, removeItem } = props;

    const handleDecrement = () => {
        if (count === 1) {
            removeItem();
        } else {
            decrementCount(index);
        }
    }

    return (
        <div className='countContainer'>
            <button
                className='countButton'
                onClick={handleDecrement}
                disabled={outOfStock}
            >
                {count === 1 ? "Remove" : "-"}
            </button>
            <span className='countNumber'>{count}</span>
            <button
                className='countButton'
                onClick={() => incrementCount(index)}
                disabled={outOfStock}
            >
                +
            </button>
        </div>
    );
}