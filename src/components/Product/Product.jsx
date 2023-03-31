import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {


const addToCart = props.addToCart;




    const {img,name,seller,ratings,quantity,price} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" srcset="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>  
            </div>
            <button onClick={()=>addToCart(props.product)} className='btn-cart'>
                Add to cart
                <FontAwesomeIcon icon={faCartShopping} beatFade size="xs" />                      </button>
        </div>
    );
};

export default Product;