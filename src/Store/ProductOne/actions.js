import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const get_one_product = createAsyncThunk(
    'get_one_product',
    async ({ id, token }) => {
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = `https://matear-back.onrender.com/api/article/${id}`;
        try {
            let response = await axios.get(url, headers)
            return {
                producto: response.data.message
            }
        } catch (error) {
            return {
                producto: []
            }
        }
    }
)

const editProduct = createAsyncThunk(
    'editProduct', async ({ id, headers }) => {
        try {
            let response = await axios.put(`https://matear-back.onrender.com/api/products/${id}`, headers)
           console.log(response)
            return {
                article: response.data.response
            }
        } catch (error) {
            return {
                article:[]
            }
        }

    }
)

const actions = { get_one_product , editProduct }

export default actions