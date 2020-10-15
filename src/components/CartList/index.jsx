import React, { useContext } from "react";

import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './index.css';
import ProductList from "../../components/ProductList";

export const CartList  = () => {


  
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

          <ProductList/>

          <div   className='cart-line cart-buttons'>
            <Button onClick={vaciarCarro} variant="danger" >Vaciar Carro</Button>
            <Button as={NavLink} to={'/order'} >Comprar</Button>

          </div>

        </div>
        );
  
}
 
export default CartList;

