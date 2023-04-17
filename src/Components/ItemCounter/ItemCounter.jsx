import React, { useState } from "react";

export default function ItemCounter({ stock, initialCount, onCountChange }) {
    const [count, setCount] = useState(initialCount);

    const decrementCount = () => {
        setCount((prevCount) => prevCount > 1 ? prevCount - 1 : prevCount);
        onCountChange(count - 1);
    };

    const incrementCount = () => {
        setCount((prevCount) => prevCount < stock ? prevCount + 1 : prevCount);
        onCountChange(count + 1);
    };

    const outOfStock = stock === 0;

    return (
        <div className="count-container">
        <button onClick={decrementCount} disabled={count === 1}>
            -
        </button>
        <span className="count">{count}</span>
        <button onClick={incrementCount} disabled={outOfStock || count >= stock}>
            +
        </button>
        </div>
    );
}