import React, { Component, useContext } from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import { CartContext } from '../CartContext';
import CartIcon from '../CartIcon';

import './index.css';
import { NavLink } from 'react-router-dom';

export const Cart  = () => {

  
    const [cart, setCart] = useContext(CartContext)
    const precio = cart.reduce(( accumulator, current) => accumulator + parseFloat(current.price),0);
    return (
      <NavLink 
      className="Header-List-Link"
      to="/cartlist"
    >
        <div className='cart'>

<CartIcon/>
<span className='cart-text'>
   
</span>
<span className='cart-text'>
   Total : ${ precio.toFixed(2) }     {cart.length > 0 ? '(' + cart.length + 
    ' Productos)': ''}
</span>          
</div>
    </NavLink>

        );
  
}
 
export default Cart;


