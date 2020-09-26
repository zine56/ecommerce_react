import React,{Component} from 'react';
import NavBar from "./components/NavBar";
import { CartProvider } from "./components/CartContext";
import { CounterProvider } from "./components/CounterContext";

import Home from "./components/Home";
import Card from 'react-bootstrap/Card';
import { ItemList } from './components/ItemList';

import { Item } from './components/Item';
import ItemDetail from './components/ItemDetail';

import logo from './logo.svg';
import './App.css';
import { LikeButton } from './components/LikeButton';
import { LikeCounter } from './components/LikeCounter';

import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CartList } from './components/CartList';
export default class App extends Component {

  constructor() {
    super();

  }
  
  render (){

    return (
    <div className="App">
      <Router>

      <header className="App-header">        
        <CartProvider>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <ItemList type="offers" />
            <div>
              <div>
                <CounterProvider>
                  <LikeButton/>
                  <LikeCounter/>
                </CounterProvider>            
              </div>            
              <div>
                <Home greeting="bienvenid@ a la tienda @_@" />
              </div>              
            </div>
          
          
          </Route>
        <Route exact path='/products'>
              <ItemList type="all" />
        </Route>
        <Route exact path='/product/:id' component={ItemDetail}>
        </Route>
        <Route exact path='/cart'>
          <CartList/>
        </Route>
        </Switch>

        </CartProvider>


      </header>

      </Router>

    </div>)
  }
}

