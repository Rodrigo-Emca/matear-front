import React from 'react'
import {Link as Anchor,useNavigate } from 'react-router-dom'
import './productCard.css'

export default function ProductCard(props) {
    // console.log(props)
    // console.log(props.product_id)

    return (
        // <div className='card-container'>
        //     <div className='inf-card'>
        //         <h2 className='title-card'>{props.product_id.title}</h2>
        //         <h2 className='title-card'>Stock: {props.product_id.stock}</h2>
        //         {/* <h5 className='category-card'>{props.product_id.description}</h5> */}
        //         <Anchor to={'/details'} className='btn-card' props={props}>Details</Anchor>
        //     </div>
        //     <img className='img-card' src={props.product_id.cover_photo} alt='imagen' />
        // </div>
        <div className='container'>
            <div className="card">
                <div className="image">
                <img src={props.product_id.cover_photo} alt='imagen'/>
                </div>
                <div className="details">
                    <div className="center">
                        <h1>{props.product_id.title}</h1>
                        <p>{props.product_id.description}</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                        <Anchor to={'/details'} className='' props={props}>Details</Anchor>
                    </div>
                </div>
            </div>
        </div>
    )
}
