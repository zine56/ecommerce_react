import React from 'react';

import './index.css';

/**
 * The Input Component.
 * 
 * @param  {Number}    count         The count value to show on the input.
 * @param  {Function}  handleChange  The function to handle the onChange action.
 *
 * @return {JSX}  The JSX element to render.         
 */
function InputCount(props) {
  console.log(props);
  return (
    <input className="countInput" onChange={props.handleChange} value={props.count}/>
  )
}

export default InputCount;