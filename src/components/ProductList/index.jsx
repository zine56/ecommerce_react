import React from 'react';

import { Item } from '../Item';

import './index.css';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ItemList = (props) => {
    return (props.products.length ?    
        ( 
        
            <div className='product-list'>
            {
                props.products.map(item => (

                    <Item name={item.name} price={item.price} img={item.img} key={item.id} />
    
                ))
            }
            </div>

        )           
        : <div className='empty-product-list'> <FontAwesomeIcon icon={faSpinner} spin /> Cargando...</div>)


}