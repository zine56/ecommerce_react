import React, { useContext } from "react";
import { CounterContext } from '../CounterContext';
import Button from 'react-bootstrap/Button';

import './index.css';

export const LikeButton = (props) => {
    const limiteSuperior = 20;
    const limiteInferior = 0;

    const [count, setCount] = useContext(CounterContext)

    const incrementar = () => {

        if(count < limiteSuperior){
            setCount((count + 1));
        }         
    }

    const decrementar = () => {
        if(count > limiteInferior){
          setCount((count - 1));
        } 
    }

    return (
        <div className = ''>
            <Button onClick={incrementar}>Me gusta!</Button>
            <Button onClick={decrementar}>No me gusta</Button>
        </div>
    )

}