import React, { useContext } from "react";

import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './index.css';

export const OrderDetail  = ({props}) => {
    let itemObj = {};
    if(props.cart){
      props.cart.forEach((item)=>{
        if(!itemObj[item.id])
          itemObj[item.id] = { name:item.name , price:0, count:0, unitary:parseFloat(item.price) }
        itemObj[item.id].price+=parseFloat(item.price) 
        itemObj[item.id].count++;
      })
    } 

    return (
        <div className='order-list'>
          <div   className='cart-line margin-white'>
            <div className="order-block">Orden creada:</div>   
          </div>          
          <div   className='cart-line margin-white'>
            <div className="order-block">Id de orden</div>   
            <div className="order-block">{ props.orderId }</div>
            <div className="order-block">Nombre</div>   
            <div className="order-block">{ props.fields.name }</div>
            <div className="order-block">Apellidos</div>   
            <div className="order-block">{ props.fields.lastName }</div>
            <div className="order-block">Telefono</div>   
            <div className="order-block">{ props.fields.phone }</div>
            <div className="order-block">Email</div>   
            <div className="order-block">{ props.fields.email }</div>
            <div className="order-block">Fecha:</div>   
            <div className="order-block">{ props.date }</div>
            <div className="order-block">Estado:</div>   
            <div className="order-block">{ props.status }</div>
            <div className="order-block">Productos de la orden:</div>   

          </div>

          {
          Object.keys(itemObj).map( (key) => {
          return <div key={key}  className='cart-line  ' >
            <div className="item-block-title">{itemObj[key].name}</div>   
            <div className="item-block-price">${parseFloat(itemObj[key].price)}</div>   
            <div className="item-block-count">({itemObj[key].count} Producto{itemObj[key].count > 1 ?'s':''} x ${itemObj[key].unitary})</div>   
          </div>
          } )
          }
          <div   className='cart-line margin-white'>
            <div className="item-block-title">Total</div>   
            <div className="item-block-price">${ props.total.toFixed(2) }</div>
            <div className="item-block-count">({ props.cart.length } Productos)  </div>
          </div>

          <div   className='cart-line margin-white'>
            <div className="">
              <Button as={NavLink} to={'/'}>Volver al Home</Button>
            </div>   
          </div>

        </div>
        );
  
}
 
export default OrderDetail;

