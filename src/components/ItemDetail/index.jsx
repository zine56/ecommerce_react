import React, { Component, useState, useEffect, useContext} from 'react';
import { CartContext } from '../CartContext';

import  ButtonBuy from '../ButtonBuy';
import  InputCount from '../InputCount';

import './index.css';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import {ItemCount} from '../ItemCount';


 class ItemDetail extends Component {
  static contextType = CartContext

  constructor(props) {
    super(props);
    this.state = {
       data: null
      ,count:0
    };
    this.handleChange = this.handleChange.bind(this);

  }
  async componentDidMount() {

    if (this.props.match.params) {

      let promise = new Promise((resolve,reject)=>{
          fetch(`https://fakestoreapi.com/products/${ this.props.match.params.id }`)
          .then(res => res.json())
          .then(json => { 
            console.log("desde la api",json) 
            resolve(json)
          })
      })
  
  
     promise.then( result => {
        this.setState({data:result, count:0}) 
     }, function(error) {
        this.setState({data:null, count:0})
     });

    }
  }


  agregarAlCarro = () => {
      if(!this.state.count)
        return;
      const [cart, setCart] = this.context
      const product  = {title: this.state.data.title, price: this.state.data.price, id: this.state.data.id   }
      let arrProducts = [];
      for(let i=0;i<this.state.count;i++){
        arrProducts.push(product)
      }
      setCart(curr => [...curr,...arrProducts]);
  }


  handleChange = (event) => {
    this.setState({
      count: event.target.value,
      data:this.state.data
    });
  }

  handleAdd = () => {
      this.setState((state) => ({
        count: state.count + 1,
        data:this.state.data
      }));
  }
  handleSubstract = () => {
      if(this.state.count === 0)
        return;
      this.setState((state) => ({
        count: state.count - 1,
        data:this.state.data
      }));
  }
  render(){
    return (
    
    (!this.state.data) ?  <div className='empty-product-list'> <FontAwesomeIcon icon={faSpinner} spin /> Cargando...</div>: <div>
                      <div><img src={this.state.data.image} className='img-product' /></div>
                <div>{this.state.data.title}</div> 
                  <div>
                    ${this.state.data.price}
                  </div>
                  <div> 

                    <ItemCount count={this.state.count} handleAdd={this.handleAdd} handleSubstract={this.handleSubstract} 
                    handleChange={this.handleChange} />
  <Button onClick={this.agregarAlCarro}>Comprar {this.state.count ? this.state.count : ''}</Button>
                  </div>          
    </div>
    
    )
  }
}

export default ItemDetail