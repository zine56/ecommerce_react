import React, { useContext } from "react";

import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './index.css';

export const ProductList  = () => {
  
    const [cart, setCart] = useContext(CartContext)
    const precio = cart.reduce(( accumulator, current) => accumulator + parseFloat(current.price),0);
    
    let itemObj = {};
    if(cart){
      cart.forEach((item)=>{
        if(!itemObj[item.id])
          itemObj[item.id] = { name:item.name , price:0, count:0, unitary:parseFloat(item.price) }
        itemObj[item.id].price+=parseFloat(item.price) 
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
            <div className="item-block-title">{itemObj[key].name}</div>   
            <div className="item-block-price">${parseFloat(itemObj[key].price)}</div>   
            <div className="item-block-count">({itemObj[key].count} Producto{itemObj[key].count > 1 ?'s':''} x ${itemObj[key].unitary})</div>   
          </div>
          } )
          }
          <div   className='cart-line margin-white cart-line-totals'>
            <div className="item-block-title">Total</div>   
            <div className="item-block-price">${ precio.toFixed(2) }</div>
            <div className="item-block-count">({ cart.length } Productos)  </div>
          </div>

        </div>
        );
  
}
 
export default ProductList;

