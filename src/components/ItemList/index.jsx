import React, { Component} from 'react';

import { Item } from '../Item';

import './index.css';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {db} from '../../services/firestore';
import { dataService } from '../../services/dataService';

class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = {
       data: null
      ,loading:true
      ,categories:[]
      ,currentSection:'Todos los productos'
    };
  }

   updateData() {

    let field= this.props.type === 'all' ? 'price': 'price';
    let limit = this.props.type === 'all' ? 100 : 10;
    let order = this.props.type === 'all' ? 'desc': 'asc';
    let title= this.props.type === 'all' ? 'Todos los productos': '';

    let category = (this.props && this.props.match && this.props.match.params && this.props.match.params.categoryId ? this.props.match.params.categoryId : null)
    let categoryObject;
    if(category){
      categoryObject = this.state.categories.find(cat => {
        return cat.link === category
      })
      this.setState({currentSection: categoryObject && categoryObject['nombre'] ? categoryObject['nombre']: ''})
    } else {

      this.setState({currentSection:title})
    }


    this.setState({loading:true}) 
  
    if (category){
      db.collection("products").where("category", "==", category)
      //.orderBy(field,order)
      .limit(50)
      .get()
      .then(querySnapshot => {
        if(querySnapshot.size === 0){
          this.setState({data:[]}) 
        } else {
          const data = querySnapshot.docs.map(doc => { return  {id: doc.id, ...doc.data() } }  );
          this.setState({data:data}) 
        }
      }).catch((error)=>{
        this.setState({data:[]}) 
      }).finally(()=>{
        this.setState({loading:false}) 
      }); 
    } else {
      db.collection("products")
      .orderBy(field,order).limit(limit)
      .get()
      .then(querySnapshot => {
        if(querySnapshot.size === 0){
          this.setState({data:[]}) 
        } else {
          const data = querySnapshot.docs.map(doc => { return  {id: doc.id, ...doc.data() } }  );
          this.setState({data:data}) 
        }
      }).catch((error)=>{
        this.setState({data:[]}) 
      }).finally(()=>{
        this.setState({loading:false}) 
      }); 
    }

  }

  async componentDidMount() {
    dataService.getData().subscribe(message => {
      this.setState({categories:message.value}) 
      this.updateData()
    });
  }

  async componentDidUpdate(prevProps){
    if(JSON.stringify(this.props) !== JSON.stringify(prevProps)){  
      this.updateData()
    }
  }

  render(){

    if(this.state.loading){
      return <div className='empty-product-list'> <FontAwesomeIcon icon={faSpinner} spin /> Cargando...</div>
    }

    return (
      <div>
        <div className="product-header">
          {this.state.currentSection}
        </div>
        <div className='product-list'>
        {
            this.state.data.map(item => (

                <Item data={item} key={item.id} />

            ))
        }
        </div>
      </div>
    )
  }
}

export default ItemList