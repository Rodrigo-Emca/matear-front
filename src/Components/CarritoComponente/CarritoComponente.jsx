import React, { useState, useEffect } from "react";
import "./carritoComponente.css";
import { useSelector, useDispatch } from "react-redux";
import productsActions from "../../Store/ProductsAll/actions";
import { Link as Anchor } from "react-router-dom";
import StockInfo from "../../Components/StockInfo/StockInfo";
import ItemCounter from "../ItemCounter/ItemCounter";

const { read_all_products } = productsActions;

export default function CarritoComponente() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);

  const productos = useSelector((store) => store.productos.productos);

  useEffect(() => {
    dispatch(read_all_products());
    const cartItems = Object.keys(localStorage)
      .filter((key) => key.includes("cartItem"))
      .map((key) => JSON.parse(localStorage.getItem(key)));
    setItems(cartItems);
  }, [dispatch]);

  const removeItem = (productId) => {
    localStorage.removeItem(`cartItem${productId}`);
    setItems((prevItems) => prevItems.filter((item) => item !== productId));
  };

  let total = 0;

  return (
    <div className="mainContainer">
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Count</th>
            <th>Remove Item</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {productos
            .filter((producto) => items.includes(producto._id))
            .map((producto, index) => {
              const subTotal = parseFloat(producto.product_id.price) * count;
              total += subTotal;

              return (
                <tr key={producto._id}>
                  <td>
                    <Anchor to={`/details/${producto._id}`} className="">
                      <img
                        src={producto.product_id.cover_photo}
                        alt="imagen"
                        className="productImage"
                      />
                    </Anchor>
                  </td>
                  <td>{producto.product_id.title}</td>
                  <td>
                    ${" "}
                    {parseFloat(producto.product_id.price).toLocaleString(
                      "es-AR"
                    )}
                    , 00 ARS
                  </td>
                  <td>
                    <StockInfo stock={producto.product_id.stock} />
                  </td>
                  <td>
                    <ItemCounter
                      stock={producto.product_id.stock}
                      initialCount={count}
                      onCountChange={(newCount) => setCount(newCount)}
                    />
                  </td>
                  <td>
                    <button onClick={() => removeItem(producto._id)}>
                      Remove Item
                    </button>
                  </td>
                  <td>
                    ${" "}
                    {subTotal.toLocaleString("es-AR")}
                    , 00 ARS
                  </td>
                </tr>
              );
            })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td>${" "}{total.toLocaleString("es-AR")}, 00 ARS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}