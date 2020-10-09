import React from 'react';

import  ButtonBuy from '../ButtonBuy';
import  InputCount from '../InputCount';

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

