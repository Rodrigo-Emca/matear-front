import { configureStore } from '@reduxjs/toolkit'
import productReducer from './ProductsAll/reducer'

const store = configureStore({
    reducer: {
        productos: productReducer
    }
})
export default store