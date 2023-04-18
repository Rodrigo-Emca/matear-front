import { configureStore } from '@reduxjs/toolkit'
import productReducer from './ProductsAll/reducer'
import getOneProductReducer from './ProductOne/reducers'
import textReducer from './Search/reducer'
import logoutReducer from './LogoutReload/reducer'
import categoriesReducer from './Categories/reducer'
import checksReducer from "./Checks/reducer"

const store = configureStore({
    reducer: {
        productos: productReducer, //para traer TODOS los productos
        producto: getOneProductReducer, //para traer UN SOLO producto
        text: textReducer, //para filtrar por texto
        logoutState: logoutReducer, //para cerrar sesion
        categories: categoriesReducer, // para ver todas las categorias
        checks: checksReducer, //para filtrar con checks
    }
})
export default store