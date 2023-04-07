import React from 'react'
import './productCard.css'

export default function ProductCard(props) {
    //console.log(props.product_id.title)

    return (
        <div className='card-container'>
            <div className='inf-card'>
                <h2 className='title-card'>{props.product_id.title}</h2>
                <h2 className='title-card'>Stock: {props.product_id.stock}</h2>
                {/* <h5 className='category-card'>{props.product_id.description}</h5> */}
                <button className='btn-card'>Details</button>
            </div>
            <img className='img-card' src={props.product_id.cover_photo} alt='imagen' />
        </div>
    )
}
