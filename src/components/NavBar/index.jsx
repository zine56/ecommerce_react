import React, { Component } from "react";

import Dropdown from 'react-bootstrap/Dropdown';

import Cart from '../Cart';

import './index.css';

class NavBar extends Component {

    render() {
      
    return (<nav>
          <div className="menu">
          <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Tienda de Ricardo
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Peliculas</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Videojuegos</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Libros</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <Cart/>
        </nav>);
  }
}
 
export default NavBar;





