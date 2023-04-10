import { configureStore } from '@reduxjs/toolkit'
import productReducer from './ProductsAll/reducer'
import getOneProductReducer from './ProductOne/reducers'
import textReducer from './Search/reducer'

const store = configureStore({
    reducer: {
        productos: productReducer, //para traer TODOS los productos
        producto: getOneProductReducer, //para traer UN SOLO producto
        text: textReducer, //para filtrar por texto
    }
})
export default store