import React from 'react';

export default function StockInfo({ stock }) {
    if (stock === 0) {
        return <p>Momentaneamente sin unidades</p>;
    } else if (stock < 5) {
        return <p>Ultimas {stock} unidades disponibles</p>;
    } else {
        return <p>Available: {stock}</p>;
    }
}
