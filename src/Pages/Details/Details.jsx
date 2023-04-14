import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import productAction from '../../Store/ProductOne/actions';
import productsActions from '../../Store/ProductsAll/actions';
import './details.css';
import { AiFillEdit } from "react-icons/ai"
import categoriesActions from '../../Store/Categories/actions'

const { get_one_product } = productAction;
const { read_all_categories } = categoriesActions
const { read_all_products } = productsActions;

export default function Details() {
  const { id } = useParams();
  //console.log(id)
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  let token = localStorage.getItem('token')
  let user = JSON.parse(localStorage.getItem('user'))
  const productoSimple = useSelector((store) => store?.producto?.producto);

  useEffect(() => {
    dispatch(get_one_product({ id, token }));
    dispatch(read_all_categories({}))
  }, [reload]);

  const handleClick = (index) => {
    document.getElementById('main-img').src = productoSimple.photo[index];
  };

  function getCategoryName(value) {
    switch (value) {
      case '643870a794742add718cb2f4':
        return 'mates';
      case '643870a794742add718cb2f5':
        return 'thermos';
      case '643870a794742add718cb2f6':
        return 'strawbulbs';
      case '643870a794742add718cb2f7':
        return 'accessories';
      case '643870a794742add718cb2f8':
        return 'mate carriers';
      default:
        return '';
    }
  }

  //Boton agregar al carrito
  const [pressed, setPressed] = useState(false);
  const productsAll = useSelector(store => store.productos.productos)
  //console.log(productsAll)

  useEffect(() => {
    dispatch(read_all_products());
  }, []);

  useEffect(() => {
    const cartItemKey = `cartItem${id}`;
    const cartItemExists = localStorage.getItem(cartItemKey) !== null;
    setPressed(cartItemExists);
}, [id]);

const handleCarritoClick = () => {
  const cartItemKey = `cartItem${id}`;
  const cartItemExists = localStorage.getItem(cartItemKey) !== null;

  if (cartItemExists) {
    localStorage.removeItem(cartItemKey);
    setPressed(false);
  } else {
    const productToAdd = productsAll.find(product => product._id === id);
    localStorage.setItem(cartItemKey, JSON.stringify(productToAdd));
    setPressed(true);
    console.log(productToAdd)
  }
};

  return (
    <div className="detail">
      <div className="main-img-container">
        <div className="img-zoom-container">
          <img className="main-img" id="main-img" src={productoSimple?.photo?.[0]} alt="Main product" />
          <div className="img-zoom" id="img-zoom" />
        </div>
      </div>

      <div className="gallery-container">
        {productoSimple.photo &&
          productoSimple.photo.map((photo, index) => (
            <div className="gallery-img" key={index} onClick={() => handleClick(index)}>
              <img src={photo} alt={`imagen ${index}`} className="gallery-img" />
            </div>
          ))}
      </div>
      <div className="info-detail">
        <h1>{productoSimple?.product_id?.title}</h1>
        <p>{productoSimple?.product_id?.description}</p>
        <p>Stock: <span style={{color: productoSimple?.product_id?.stock < 3 ? 'red' : 'green'}}>{productoSimple?.product_id?.stock}</span></p>
        <p>Price: ${productoSimple?.product_id?.price}</p>
        <p>
          <button className="btn-detail" onClick={handleCarritoClick}>Add to cart</button>
        </p>
        <p>Category: <span>{productoSimple?.product_id && getCategoryName(productoSimple?.product_id?.category_id)}</span></p>
        {token && user.admin ? <NavLink to={`/products/${productoSimple?.product_id?._id}`}  >
          <AiFillEdit className='fillEdit' />
        </NavLink> : ""}
      </div>
    </div>
  );
}