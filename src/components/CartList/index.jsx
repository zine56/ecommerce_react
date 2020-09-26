import React, { Component, useContext } from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import { CartContext } from '../CartContext';
import CartIcon from '../CartIcon';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './index.css';

export const CartList  = () => {


  
    const [cart, setCart] = useContext(CartContext)
    const precio = cart.reduce(( accumulator, current) => accumulator + parseFloat(current.price),0);
    
    let itemObj = {};
    if(cart){
      cart.forEach((item)=>{
        if(!itemObj[item.id])
          itemObj[item.id] = { title:item.title , price:0, count:0, unitary:item.price }
        itemObj[item.id].price+=item.price 
        itemObj[item.id].count++;
      })
    } 

    const vaciarCarro = () => {
      setCart(curr => []);
    }

    if(!cart.length){
      return(
        <div className='cart-line'>
            <div>No hay items, sigue vitrineando :D</div>
            <div>
                <NavLink to={`/`}>
                  Volver al Home!
                </NavLink>
            </div>
        </div>
      )
    }

    return (
        <div className='cart-list'>
          {
          Object.keys(itemObj).map( (key) => {
          return <div key={key}  className='cart-line  ' >
            <div className="item-block-title">{itemObj[key].title}</div>   
            <div className="item-block-price">${itemObj[key].price}</div>   
            <div className="item-block-count">({itemObj[key].count} Producto{itemObj[key].count > 1 ?'s':''} x ${itemObj[key].unitary})</div>   
          </div>
          } )
          }
          <div   className='cart-line margin-white'>
            <div className="item-block-title">Total</div>   
            <div className="item-block-price">${ precio.toFixed(2) }</div>
            <div className="item-block-count">({ cart.length } Productos)  </div>
          </div>

          <div   className='cart-line'>
            <Button onClick={vaciarCarro} >Vaciar Carro</Button>
          </div>

        </div>
        );
  
}
 
export default CartList;

