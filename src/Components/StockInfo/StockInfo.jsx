import React from 'react';

export default function StockInfo({ stock }) {
    if (stock === 0) {
        return <p style={{color:'black'}}>Momentarily out of units</p>;
    } else if (stock < 5) {
        return <p style={{color:'black'}}>Last {stock} units available!</p>;
    } else {
        return <p style={{color:'black'}}>Available: {stock}</p>;
    }
}
