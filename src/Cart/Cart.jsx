import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    

    let total = 0;
    for(const sum of cart){
        total = total + sum.price;
    }




    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Selected Items: {cart.length}</p>
             <p>Total Price:{total}</p>
             <p>Total Shipping:</p>
             <p>Tax:</p>
             <h4>Grand Total:</h4>


        </div>
    );
};

export default Cart;