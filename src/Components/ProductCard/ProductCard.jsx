import React from 'react'
import {Link as Anchor,useNavigate } from 'react-router-dom'
import './productCard.css'

export default function ProductCard(props) {
    console.log(props)
    //console.log(props.product_id.title)

    return (
        <div className='card-container'>
            <div className='inf-card'>
                <h2 className='title-card'>{props.product_id.title}</h2>
                <h2 className='title-card'>Stock: {props.product_id.stock}</h2>
                {/* <h5 className='category-card'>{props.product_id.description}</h5> */}
                <Anchor to={'/details'} className='btn-card' props={props}>Details</Anchor>
            </div>
            <img className='img-card' src={props.product_id.cover_photo} alt='imagen' />
        </div>
    )
}
