import React, { useState, useEffect } from "react";
import "./carritoComponente.css";
import { Link as Anchor } from "react-router-dom";
import StockInfo from "../../Components/StockInfo/StockInfo";
import ContadorStock from "../../Components/ContadorStock/ContadorStock";
import mercadopago from "../../Img/mercadopago.png";
import Image from "../Image/Image";
import axios from "axios";

export default function CarritoComponente() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = Object.keys(localStorage)
      .filter((key) => key.includes("cartItem"))
      .map((key) => JSON.parse(localStorage.getItem(key)));
    setItems(cartItems);
  }, []);

  const removeItem = (idProduct) => {
    localStorage.removeItem(`cartItem${idProduct}`);
    setItems((prevItems) =>
      prevItems.filter((item) => item.product.idProduct !== idProduct)
    );
  };

  const [counts, setCounts] = useState([]);

  useEffect(() => {
    setCounts(items.map((item) => 1));
  }, [items]);

  const [outOfStock, setOutOfStock] = useState([]);

  useEffect(() => {
    setOutOfStock(items.map((item) => item.product.product_id.out_of_stock));
  }, [items]);

  const incrementCount = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      const item = items[index].product.product_id;
      if (item.stock > 0 && newCounts[index] < item.stock) {
        newCounts[index] += 1;
        if (newCounts[index] === item.stock) {
          setOutOfStock((prevOutOfStock) => {
            const newOutOfStock = [...prevOutOfStock];
            newOutOfStock[index] = true;
            return newOutOfStock;
          });
        }
      }
      return newCounts;
    });
  };

  const decrementCount = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      const item = items[index].product.product_id;
      if (newCounts[index] > 1) {
        newCounts[index] -= 1;
      } else {
        removeItem(item.idProduct);
      }
      if (newCounts[index] < item.stock) {
        setOutOfStock((prevOutOfStock) => {
          const newOutOfStock = [...prevOutOfStock];
          newOutOfStock[index] = false;
          return newOutOfStock;
        });
      }
      return newCounts;
    });
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item, index) => {
      const price = parseFloat(item.product.product_id.price);
      const count = parseFloat(counts[index]);
      totalPrice += price * count;
    });
    return totalPrice.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    });
  };
  
  const handleCheckout = () => {
    const orderData = {
      items: items.map((item) => ({
        product_id: item.product.product_id,

        quantity: counts[items.indexOf(item)],
      })),
      total_price: calculateTotalPrice(),
    };

    axios
      .post("https://matear-back.onrender.com/api/payment", orderData)
      .then((response) => {
        window.location.href = response.data.response.body.init_point;
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody className="hola2">
          {items.map((item, index) => (
            <tr key={item.product.idProduct}>
              <td>
                <Anchor to={`/details/${item.product.idProduct}`} className="">
                  <img
                    src={item.product.product_id.cover_photo}
                    alt="imagen"
                    className="productImage"
                  />
                </Anchor>
              </td>
              <td>{item.product.product_id.title}</td>
              <td>
                ${" "}
                {parseFloat(item.product.product_id.price).toLocaleString(
                  "es-AR"
                )}{" "}
                ,00 ARS
              </td>
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
              <td>
                ${" "}
                {(
                  parseFloat(item.product.product_id.price) *
                  parseFloat(counts[index])
                ).toLocaleString("es-AR")}{" "}
                ,00 ARS
              </td>
            </tr>
          ))}
          <tr>
            <td>Total purchase:</td>

            <td colSpan="5">
              ${" "}
              {parseFloat(calculateTotalPrice()).toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              })}{" "}
              ,00 ARS
            </td>
          </tr>
          <button className="mp" onClick={handleCheckout}>
            {" "}
            Do you want to pay with?
            <Image src={mercadopago} className="img-mp" alt="mercadopago" />
          </button>
        </tbody>
      </table>
    </div>
  );
}