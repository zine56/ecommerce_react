import React, { useContext } from "react";
import { CartContext } from '../CartContext';
import Card from "react-bootstrap/esm/Card";
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

import './index.css';

export const Item = (props) => {

    const [cart, setCart] = useContext(CartContext)

    const agregarAlCarro = () => {
        const product  = {title: props.data.title, price: props.data.price, id: props.data.id   }
        setCart(curr => [...curr, product]);
    }

    return (
        <div className = 'product'>
                <NavLink to={`/product/${props.data.id}`}>
                <div><img src={props.data.image} className='img-product' /></div>
                <div className='title-product'>{props.data.title}</div> 
                  <div  className='price-product'>
                    ${props.data.price}
                  </div>
 
                </NavLink>  
                <div>
                    <Button onClick={agregarAlCarro}>Agregar al carro</Button>
                  </div>                
        </div>
    )

}