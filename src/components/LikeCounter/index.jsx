import React, { Component, useContext } from "react";

import { CounterContext } from '../CounterContext';

import './index.css';

export const LikeCounter  = () => {

    const [count, setCount] = useContext(CounterContext)
    
    return (
        <div className=''>
          <span className='cart-text'>
             Total Likes : { count }
          </span>          
          <br/>
          <span>(como dice el desafio teniamos que hacerlo con limites maximos y minimos, en este caso usé 0 y 20)</span>
        </div>
        );
  
}
 
export default LikeCounter;


