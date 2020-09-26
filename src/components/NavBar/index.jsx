import React, { Component } from "react";

import Dropdown from 'react-bootstrap/Dropdown';

import Cart from '../Cart';

import './index.css';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {

    render() {
      
    return (<nav>
          <div className="menu">

            <span
              className='Header-List-Item'
              key="1"
            >
              <NavLink 
                className="Header-List-Link"
                to="/"
              >
                Home
              </NavLink>
            </span>

            <span
              className='Header-List-Item'
              key="2"
            >
              <NavLink 
                className="Header-List-Link"
                to="/products"
              >
                Productos
              </NavLink>
            </span>




        </div>
        <Cart/>
        </nav>);
  }
}
 
export default NavBar;





