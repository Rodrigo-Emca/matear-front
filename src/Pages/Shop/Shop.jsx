import React, { useRef, useState, useEffect } from 'react';
import './Shop.css';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import productsActions from '../../Store/ProductsAll/actions';
import textActions from '../../Store/Search/actions';
import TextFilter from '../../Components/TextFilter/TextFilter';

const { read_all_products } = productsActions;
const { captureText } = textActions;

export default function Shop() {
    const [reload, setReload] = useState(false);
    const dispatch = useDispatch();
    const title = useRef('');

    const productos = useSelector((store) => store.productos.productos);
    const defaultText = useSelector((store) => store.text.text);

    useEffect(() => {
        dispatch(read_all_products());
    }, [reload]);

    function handleChange(event) {
        setReload(!reload);
        dispatch(captureText({ inputText: event.target.value }));
    }

    const filteredProducts = productos.filter((productoIndividual) =>
        productoIndividual.product_id.title.toLowerCase().includes(defaultText.toLowerCase())
    );

    const foundProducts = filteredProducts.length > 0;

    return (
        <div className='container'>
            <div className='filtroPrecios'>
                <p>Aqui va el filtro por precios</p>
            </div>
            <div className='contenedorFiltroYCards'>
                <TextFilter defaultText={defaultText} onChange={handleChange} />
                <div className='cont-cards'>
                {foundProducts ? (
                    filteredProducts.map((productoIndividual) => (
                    <ProductCard
                        reload={reload}
                        setReload={setReload}
                        key={productoIndividual._id}
                        idProduct={productoIndividual._id}
                        product_id={productoIndividual.product_id}
                        photos={productoIndividual.photo}
                    />
                    ))
                ) : (
                    <p>Not found. But take a look into all our products!</p>
                )}
                </div>
            </div>
        </div>
    );
}
