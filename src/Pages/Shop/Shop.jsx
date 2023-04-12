import React, { useRef, useState, useEffect } from 'react';
import './Shop.css';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import productsActions from '../../Store/ProductsAll/actions';
import textActions from '../../Store/Search/actions';
import TextFilter from '../../Components/TextFilter/TextFilter';
import categoriesActions from '../../Store/Categories/actions'
import checkActions from '../../Store/Checks/actions'

const { read_all_products } = productsActions;
const { captureText } = textActions;
const { read_all_categories } = categoriesActions
// const { captureChecks } = checkActions


export default function Shop() {
    const dispatch = useDispatch();
    const title = useRef('');
    
    const [reload, setReload] = useState(false);
    const [categories, setCategories] = useState(null)
    
    const category = useSelector(store => store.categories.categories)
    const productos = useSelector((store) => store.productos.productos);
    const defaultText = useSelector((store) => store.text.text);
    const check = useSelector(store=> store.checks.category)
    console.log(category[0]._id)
    // console.log(check)
    // console.log(category)
    // console.log(productos)

    useEffect(() => {
        dispatch(read_all_products());
    }, [reload]);
    useEffect(() => {
        dispatch(read_all_categories());
    }, []);

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

                {category.map(item => {
                    return (
                        <>
                            <input type="checkbox" name="category" value={item._id} key={item._id} />
                            <span className="category-label">{item.name}</span>
                        </>
                    )
                })}
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
