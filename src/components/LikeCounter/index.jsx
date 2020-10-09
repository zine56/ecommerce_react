import React, { useContext } from "react";

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
{/*  */}        </div>
        );
  
}
 
export default LikeCounter;


