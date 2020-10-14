import React, { Component} from 'react';
import { CartContext } from '../../context/CartContext';
import './index.css';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import {ItemCount} from '../ItemCount';

import {db} from '../../services/firestore';

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
      db.collection("products")
      .doc(this.props.match.params.id)
      .get()
      .then(doc => {

        if(!doc.exists){
          this.setState({data:{}, count:0}) 
        } else {
          const data = {id:doc.id,...doc.data()};

          this.setState({data:data, count:0}) 
        }
      }).catch((error)=>{
        this.setState({data:[], count:0}) 
      }).finally(()=>{
        //parar loader
      }); 
    }
  }


  agregarAlCarro = () => {
      if(!this.state.count)
        return;
      const [cart, setCart] = this.context
      const product  = {name: this.state.data.name, price: parseFloat(this.state.data.price), id: this.state.data.id   }
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

  handleImageError(ev){
    ev.target.src = 'https://via.placeholder.com/150x200/FFFFFF/000000/?text=Sin%20imagen'
  }

  render(){


    let image = (this.state.data && this.state.data.image ? this.state.data.image : '');
    return (
      
    (!this.state.data) ?  <div className='empty-product-list'> <FontAwesomeIcon icon={faSpinner} spin /> Cargando...</div>: <div>
                      <div><img src={image} className='img-product' onError={this.handleImageError} alt="producto" /></div>
                <div>{this.state.data.name}</div> 
                  <div>
                    ${parseFloat(this.state.data.price).toFixed(2)}
                  </div>
                  <div> 

                    <ItemCount count={this.state.count} handleAdd={this.handleAdd} handleSubstract={this.handleSubstract} 
                    handleChange={this.handleChange} />
  <Button onClick={this.agregarAlCarro}>Comprar {this.state.count ? this.state.count : ''}</Button>
                  </div>
                  
                  <div>
                    Descripcion:
                  </div> 
                  
                  <div  dangerouslySetInnerHTML={{ __html: this.state.data.description }} >
                  </div>          
    </div>
    
    )
  }
}

export default ItemDetail