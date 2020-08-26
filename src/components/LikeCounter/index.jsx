import React, { Component, useContext } from "react";

import { CounterContext } from '../CounterContext';

import './index.css';

export const LikeCounter  = () => {

    const [count, setCount] = useContext(CounterContext)
    
    return (
        <div className=''>
          <span className='cart-text'>
             Total Likes : { count >= 0 ? count : 0 }
          </span>          
        </div>
        );
  
}
 
export default LikeCounter;


