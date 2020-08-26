import React, { Component, useContext } from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import { CartContext } from '../CartContext';
import CartIcon from '../CartIcon';

import './index.css';

export const Cart  = () => {

  
    const [cart, setCart] = useContext(CartContext)
    const precio = cart.reduce(( accumulator, current) => accumulator + current.price,0);
    return (
        <div className='cart'>

          <CartIcon/>
          <span className='cart-text'>
             
          </span>
          <span className='cart-text'>
             Total : ${ precio }     {cart.length > 0 ? '(' + cart.length + 
              ' Productos)': ''}
          </span>          
        </div>
        );
  
}
 
export default Cart;


