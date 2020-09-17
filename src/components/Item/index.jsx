import React, { useContext } from "react";
import { CartContext } from '../CartContext';
import Card from "react-bootstrap/esm/Card";
import Button from 'react-bootstrap/Button';

import './index.css';

export const Item = (props) => {
    const [cart, setCart] = useContext(CartContext)

    const agregarAlCarro = () => {
        const product  = {name: props.name, price: props.price   }
        setCart(curr => [...curr, product]);
    }

    return (
        <div className = 'product'>
                <div><img src={props.img}/></div>
                <div>{props.name}</div> 
                  <div>
                    ${props.price}
                  </div>
                  <div>
                    <Button onClick={agregarAlCarro}>Agregar al carro</Button>
                  </div>                

        </div>
    )

}