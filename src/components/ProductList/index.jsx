import React from 'react';

import { Product } from '../Product';

import './index.css';

export const ProductList = () => {

    const database = [
        {name:'Gladiator',price:10000,id:1,img:'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'},
        {name:'Men in black',price:12000,id:2,img:'https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
        {name:'Happy Gilmore',price:7000,id:3,img:'https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    ]

    return (
        <div className='product-list'>
    {
                database.map(item => (

                    <Product name={item.name} price={item.price} img={item.img} key={item.id} />
    
                ))
    }
        </div>


    )

}