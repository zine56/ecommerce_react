import React, { useContext } from "react";
import { CounterContext } from '../CounterContext';
import Button from 'react-bootstrap/Button';

import './index.css';

export const LikeButton = (props) => {
    const [count, setCount] = useContext(CounterContext)

    const incrementar = () => {
        setCount((count + 1));
    }

    const decrementar = () => {
        setCount((count - 1));
    }


    return (
        <div className = ''>
            <Button onClick={incrementar}>Me gusta!</Button>
            <Button onClick={decrementar}>No me gusta</Button>
        </div>
    )

}