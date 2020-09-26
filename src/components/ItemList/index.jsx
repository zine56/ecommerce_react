import React, { useState, useEffect} from 'react';

import { Item } from '../Item';

import './index.css';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ItemList = (type) => {

  const [data, setData] = useState([]);
  const[loading, setLoading] = useState(false)
    console.log("type",type)
 useEffect(() => {
    setLoading(true);

    let promise = new Promise((resolve,reject)=>{
        setTimeout(function(){
          fetch(`https://fakestoreapi.com/products${ type === 'all' ? '' : '?limit=4&sort=asc'  }`)
          .then(res => res.json())
          .then(json => { 
            console.log("desde la api",json) 
            resolve(json)
          })
        },3000)
      })
  
  
     promise.then( result => {
         setData(result)
        //this.setState({data:result}) 
        setLoading(false)
     }, function(error) {
        //this.setState([])
        setLoading(false) 
     });

 },[])

 useEffect(() => {
    console.log("poraca",data);
 },[data])

    if(loading){
        return <div className='empty-product-list'> <FontAwesomeIcon icon={faSpinner} spin /> Cargando...</div>
    }

    return ( 
        
            <div className='product-list'>
            {
                data.map(item => (

                    <Item data={item} key={item.id} />
    
                ))
            }
            </div>
        )           
}