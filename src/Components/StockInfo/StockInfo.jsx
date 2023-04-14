import React from 'react';

export default function StockInfo({ stock }) {
    if (stock === 0) {
        return <p style={{color:'black'}}>Momentaneamente sin unidades</p>;
    } else if (stock < 5) {
        return <p style={{color:'black'}}>Ultimas {stock} unidades disponibles</p>;
    } else {
        return <p style={{color:'black'}}>Available: {stock}</p>;
    }
}
