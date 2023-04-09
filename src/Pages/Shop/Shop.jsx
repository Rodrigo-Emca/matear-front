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
    
    useEffect(
        () => {
            dispatch(read_all_products())
        },
        [reload]
    )

    return (
        <div className='container'>
            <div className='filtroPrecios'>
                <p>Aqui va el filtro por precios</p>
            </div>
            <div className='contenedorFiltroYCards'>
                <div className='filtroTexto'>
                    <p>Aquí va el filtro busqueda por texto</p>
                </div>
                <div className='cont-cards'>
                    {productos.length ? (
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
                        <p>not found</p>
                    )}
                </div>
            </div>
        </div>
    )
}