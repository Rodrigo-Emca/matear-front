import React from 'react'
import './productCard.css'

export default function ProductCard(props) {
    console.log(props)

    return (
        <div>
            <p>Soy un producto</p>
        
        <div className='card-container'>
            <div className='inf-card'>
                <h2 className='title-card'>{props.title_}</h2>
                {/* <h3 className='category-card'>{props.category_.name}</h3>
                <button className='btn-card'>Details</button> */}
            </div>
            {/* <img className='img-card' src={props.photo} alt='imagen' /> */}
        </div>
        </div>
    )
}
