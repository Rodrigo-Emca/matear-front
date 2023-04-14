import React, { useRef, useState, useEffect } from 'react';
import './Shop.css';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import productsActions from '../../Store/ProductsAll/actions';
import TextFilter from '../../Components/TextFilter/TextFilter';
import categoriesActions from '../../Store/Categories/actions'


const { read_all_products, filter_product } = productsActions;
const { read_all_categories } = categoriesActions


export default function Shop() {
    const dispatch = useDispatch();

    const category = useSelector(store => store.categories.categories)
    const productos = useSelector((store) => store.productos.productosFiltrados);
    const [reload, setReload] = useState(false);
    const [filter, setFilter] = useState({
        condition: "",
        categories: [],
    })


    function handleChange(event) {
        setFilter({
            ...filter,
            condition: event.target.value
        })
    }

    const handleCategories = (value) => {
        let existe = filter.categories.find(e => e === value)
        if (existe) {
            setFilter({
                ...filter,
                categories: filter.categories.filter(e => e !== value)
            })
        } else {
            setFilter({
                ...filter,
                categories: [...filter.categories, value]
            })
        }
    }

    useEffect(() => {
        dispatch(read_all_products());
    }, [reload]);

    useEffect(() => {
        dispatch(read_all_categories());
    }, []);

    useEffect(() => {
        dispatch(filter_product({ filter: filter }));
    }, [filter])

    return (
        <div className='container-shop'>
            <div className='filtroPrecios'>
                <div className='cont-search-checks'>
                    <TextFilter defaultText={filter.condition} onChange={handleChange} />
                    <div className="filter-container">
                        {category.map(item => {
                            return (
                                <div className='check-cat'>
                                    <input type="checkbox" name="category" value={item._id} key={item._id} onClick={() => handleCategories(item._id)}/>
                                    <span className="category-label">{item.name}</span>
                                </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            <div className='contenedorFiltroYCards'>
                <div className='cont-cards'>
                    {productos.length > 0 ? (
                        productos.map((productoIndividual) => (
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