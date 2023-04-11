import { createReducer } from "@reduxjs/toolkit";
import productActions from './actions'

const { get_one_product, editProduct } = productActions

const initialState = {
    producto: [],
    article: [],
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_one_product.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    producto: action.payload.producto
                }
                return newState
            }
        )
        .addCase(
            editProduct.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    article: action.payload.article
                }
                return newState
            }
        )
)

export default reducer