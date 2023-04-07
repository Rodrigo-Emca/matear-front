import React, {useRef,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import productAction from '../../Store/ProductOne/actions'

const {get_one_product}  = productAction

export default function Details() {
    const { id } = useParams();
    const [reload, setReload] = useState(false);
    const dispatch = useDispatch()

    let productoSimple = useSelector(store => store.producto.producto)
    console.log(productoSimple)
    
    useEffect(
        () => {
            dispatch(get_one_product({id}))
        },
        [reload]
    )

    return (
        <div>
        <h1>Details</h1>
        <p>ID: {productoSimple._id}</p>
        <p>Nombre del producto: {productoSimple.title}</p>
        </div>
    )
}

