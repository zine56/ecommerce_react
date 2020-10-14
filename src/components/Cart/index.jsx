import React, { useContext } from "react";

import { CartContext } from '../../context/CartContext';
import CartIcon from '../CartIcon';

import './index.css';
import { NavLink } from 'react-router-dom';

export const Cart  = () => {

  
    const [cart, setCart] = useContext(CartContext)
    const precio = cart.reduce(( accumulator, current) => accumulator + parseFloat(current.price),0);
    return (
      <NavLink 
      className="Header-List-Link"
      to="/cart"
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


