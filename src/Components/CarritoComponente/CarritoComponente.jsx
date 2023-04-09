import React, { useState, useEffect } from 'react';
import './carritoComponente.css';
import { Link as Anchor } from 'react-router-dom';
import StockInfo from '../../Components/StockInfo/StockInfo';
import ContadorStock from '../../Components/ContadorStock/ContadorStock';

export default function CarritoComponente() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const cartItems = Object.keys(localStorage)
            .filter(key => key.includes('cartItem'))
            .map(key => JSON.parse(localStorage.getItem(key)));
        setItems(cartItems);
    }, []);

    const removeItem = (idProduct) => {
        localStorage.removeItem(`cartItem${idProduct}`);
        setItems(prevItems => prevItems.filter(item => item.product.idProduct !== idProduct));
    }

    const [counts, setCounts] = useState([]);

    useEffect(() => {
        setCounts(items.map(item => 1));
    }, [items]);

    const [outOfStock, setOutOfStock] = useState([]);

    useEffect(() => {
        setOutOfStock(items.map(item => item.product.product_id.out_of_stock));
    }, [items]);

    const incrementCount = (index) => {
        setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            const item = items[index].product.product_id;
            if (item.stock > 0 && newCounts[index] < item.stock) {
                newCounts[index] += 1;
                if (newCounts[index] === item.stock) {
                    setOutOfStock(prevOutOfStock => {
                        const newOutOfStock = [...prevOutOfStock];
                        newOutOfStock[index] = true;
                        return newOutOfStock;
                    });
                }
            }
            return newCounts;
        });
    }

    const decrementCount = (index) => {
        setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            const item = items[index].product.product_id;
            if (newCounts[index] > 1) {
                newCounts[index] -= 1;
            } else {
                removeItem(item.idProduct);
            }
            if (newCounts[index] < item.stock) {
                setOutOfStock(prevOutOfStock => {
                    const newOutOfStock = [...prevOutOfStock];
                    newOutOfStock[index] = false;
                    return newOutOfStock;
                });
            }
            return newCounts;
        });
    };

return (
    <div className='mainContainer'>
    <table className='table'>
        <thead>
        <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Count</th>
        </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
            <tr key={item.product.idProduct}>
            <td>
                <Anchor to={`/details/${item.product.idProduct}`} className="">
                <img src={item.product.product_id.cover_photo} alt="imagen" className='productImage' />
                </Anchor>
            </td>
            <td>{item.product.product_id.title}</td>
            <td>$ {item.product.product_id.price} ARS</td>
            <td>
                <StockInfo stock={item.product.product_id.stock} />
            </td>
            <td>
                <ContadorStock
                index={index}
                count={counts[index]}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
                outOfStock={item.product.product_id.out_of_stock}
                removeItem={() => removeItem(item.product.idProduct)}
                />
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}