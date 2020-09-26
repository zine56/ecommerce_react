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

<span className='cart-text cart-summary-line'>
   Total : ${ precio.toFixed(2) } 

<CartIcon count={cart.length}/>

</span>          
</div>
    </NavLink>

        );
  
}
 
export default Cart;


