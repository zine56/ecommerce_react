import React, { Component } from "react";

import Dropdown from 'react-bootstrap/Dropdown';

import Cart from '../Cart';

import './index.css';
import { NavLink } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { db } from '../../services/firestore';
import { dataService } from '../../services/dataService';

class NavBar extends Component {

    constructor(props) {
      super(props);
      this.state = {
         categories: [],
         showMenu: false,
         currentSection: ''
      };
    }

    async componentDidMount() {
      await db.collection('categories').get()
      .then(querySnapshot => {
        let data=[];
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
           data.push({id:doc.id,...doc.data()});
        });
        this.setState({categories:data})
        dataService.setData(data);
 
      }).catch((error)=>{
        this.setState({categories:[]}) 
        dataService.setData([]);
      }).finally(()=>{
        //parar loader
      });

    }
    render() {
      
    return (<nav>
          <div className="menu">

            <span
              className='Header-List-Item'
              key="1"
            >

              <Button  variant="info">
              <NavLink 
                className="Header-List-Link"
                to="/"
              >
                Home
              </NavLink>

              </Button>
            </span>

            <span
              className='Header-List-Item'
              key="2"
            >
   
              <Dropdown  >
              <Dropdown.Toggle variant="info"
              >
                <NavLink 
                  className="Header-List-Link"
                  to="/products"
                >
                  Productos
                </NavLink> 
              </Dropdown.Toggle>

              <Dropdown.Menu
              
              >
                {
                  this.state.categories.map(category=>(
                    <Dropdown.Item as={NavLink} to={'/categories/'+category.link} key={category.id}>
                    {category.nombre}
                    </Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>

            </span>




        </div>
        <div className="title-navbar">
                {}
        </div>
        <Cart/>
        </nav>);
  }
}
 
export default NavBar;





