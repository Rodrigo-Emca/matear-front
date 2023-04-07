import React, {useRef,useState,useEffect} from 'react'
import './Shop.css'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useSelector,useDispatch } from 'react-redux'
import productsActions from '../../Store/ProductsAll/actions'

const {read_all_products} = productsActions

export default function Shop() {
    const [reload, setReload] = useState(false);
    const dispatch = useDispatch()


    let productos = useSelector(store => store.productos.productos)
    console.log(productos)
    
    useEffect(
        () => {
            dispatch(read_all_products())
        },
        [reload]
    )

    return (
        <div>
            <p>Aqui deben mostrarse todos los productos</p>
            <div className='cont-cards'>
                    {productos.length?(productos.map((productoIndividual) => (
                            <ProductCard reload={reload} setReload={setReload} key={productoIndividual._id} title_={productoIndividual.title} category_={productoIndividual.category_id} photo={productoIndividual.cover_photo} _id={productoIndividual._id}/>
                        ))):<p>not found</p>} 
                </div>
        </div>
    )
}