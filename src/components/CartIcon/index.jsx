import React from "react";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css';

const CartIcon = (props) => {
        return (<div className='cart-icon-container'>
<div className='cart-overlay'>{ props.count }</div>
            <div className='cart-icon-fa'><FontAwesomeIcon icon={faShoppingCart} /></div></div>)
}

export default CartIcon;





