import React, { useEffect, useState } from 'react'
import './createarticle.css'
import { useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import categoriesActions from '../../Store/Categories/actions'
import toast, { Toaster } from 'react-hot-toast';

const { read_all_categories } = categoriesActions

export default function CreateArticle() {

    const dispatch = useDispatch()
    let categories = useSelector(store => store.categories.categories)
   
    const [article, setArticle] = useState({
        title: "",
        cover_photo: "",
        category_id: "",
        description: "",
        stock: "",
        price: "",
    })

    useEffect(() => {
        dispatch(read_all_categories({}))
    }, [])

    async function handleSubmit() {
        // e.preventDefault()


        let url = 'https://matear-back.onrender.com/api/products'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        try {
            await axios.post(url, article, headers)

            toast.success('New Product create Succefully')
            // Swal.fire({
            //     title: 'New Product create Succefully',
            //     showClass: {
            //         popup: 'animate__animated animate__fadeInDown'
            //     },
            //     hideClass: {
            //         popup: 'animate__animated animate__fadeOutUp'
            //     }
            // })
        } catch (error) {
            if (error.response.data === 'Unauthorized') {
                toast.error('You need to Login')
            } else {
                if (typeof error.response.data.message === 'string') {
                    toast.error(error.response.data.message)
                } else {
                    error.response.data.message.forEach(err => toast.error(err))
                }

            }
        }
    }

    return (
        <>
            <div className='product'>
                <div className='product-content'>
                    <section className='new-product'>
                        <h2 >New Product</h2> 
                    </section>
                    <div className='product-form' >
                        <input className='product-input' type='text' name='title' value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} placeholder='Insert Title' />
                        <input className='product-input' type='text' name='photo' value={article.cover_photo} onChange={(e) => setArticle({ ...article, cover_photo: e.target.value })} placeholder='Insert Photo of Product' />
                        <select name="" id="" placeholder='Select Categorie' value={article.category_id} onChange={(e) => setArticle({ ...article, category_id: e.target.value })}>
                            {<option value="">Select Categorie</option>}
                            {categories.map(category => {
                                return (
                                    <option className='select-option' key={category._id} value={category._id}>{category.name}</option>
                                )
                            })}
                        </select>
                        <textarea className='product-input' type='textarea' name='description' placeholder='Insert description' value={article.description} onChange={(e) => setArticle({ ...article, description: e.target.value })} />
                        <input className='product-input' type='text' name='stock' placeholder='Insert Stock'value={article.stock} onChange={(e) => setArticle({ ...article, stock: e.target.value })} />
                        <input className='product-input' type='text' name='price' placeholder='Insert Price'value={article.price} onChange={(e) => setArticle({ ...article, price: e.target.value })} />

                        <button className='send-newproduct' onClick={handleSubmit}>Send</button>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    )
}
{/* :
       <div className='noLogged'>
            <Anchor to='/auth'>Please Register/Login</Anchor>
            <p>Or</p>
            <Anchor to='/author-form'>Become an Author</Anchor>
        </div>
  */}
