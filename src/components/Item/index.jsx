import React, { useContext } from "react";
import { CartContext } from '../CartContext';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

import './index.css';

export const Item = (props) => {

    const [cart, setCart] = useContext(CartContext)

    const agregarAlCarro = () => {
        const product  = {name: props.data.name, price: parseFloat(props.data.price), id: props.data.id   }
        setCart(curr => [...curr, product]);
    }
    const handleImageError= (ev) => {
      ev.target.src = 'https://via.placeholder.com/150x200/FFFFFF/000000/?text=Sin%20imagen'
    }
    return (
        <div className = 'product'>
                <NavLink to={`/item/${props.data.id}`}>
                <div><img  onError={handleImageError} src={props.data.image} className='img-product' alt="producto"/></div>
                <div className='title-product'>{props.data.name}</div> 
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