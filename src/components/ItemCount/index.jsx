import React, { Component, useState, useEffect, useContext} from 'react';
import { CartContext } from '../CartContext';

import  ButtonBuy from '../ButtonBuy';
import  InputCount from '../InputCount';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';


export const ItemCount = (props) => {
    console.log(props)
  return(
            <div>
                <ButtonBuy
                    onClick={props.handleSubstract}
                      sign={"-"}
                    />
                    <InputCount
                      count={props.count}
                      handleChange={props.handleChange}
                    />
                    <ButtonBuy
                      onClick={props.handleAdd}
                      sign={"+"}
                    />
        </div>
    )
}

