import React, { Component, useContext } from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import { CartContext } from '../CartContext';
import CartIcon from '../CartIcon';

import './index.css';

export const CartList  = () => {

  
    const [cart, setCart] = useContext(CartContext)
    const precio = cart.reduce(( accumulator, current) => accumulator + parseFloat(current.price),0);
    return (
        <div className='cart-list'>
          {
          cart.map( (item) => {
          return <div   className='cart-line  ' key={item.id}>
            <div className="item-block-title">{item.title}</div>   
            <div className="item-block-price">${item.price}</div>   
          </div>
          } )
          }
          <div   className='cart-line margin-white'>
            <div className="item-block-title">Total  {cart.length > 0 ? '(' + cart.length + 
              ' Productos)': ''}</div>   
            <div className="item-block-price">${ precio.toFixed(2) }</div>
              </div>
        </div>
        );
  
}
 
export default CartList;


