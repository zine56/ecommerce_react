import React,{Component} from 'react';
import NavBar from "../containers/NavBar";
import { CartProvider } from "../context/CartContext";
import { CounterProvider } from "../context/CounterContext";

import Home from "../components/Home";
import ItemList from '../containers/ItemList';

import ItemDetail from '../containers/ItemDetail';

import './GlobalStyles.css';
import { LikeButton } from '../components/LikeButton';
import { LikeCounter } from '../components/LikeCounter';

import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CartList } from '../components/CartList';
import Order from '../containers/Order';

export default class AppRoutes extends Component {

  render (){

    return (
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
        <Route exact path='/item/:id' component={ItemDetail}>
        </Route>
        <Route exact path='/categories/:categoryId' component={ItemList}>
        </Route>
        <Route exact path='/cart'>
          <CartList/>
        </Route>
        <Route exact path='/order'>
          <Order/>
        </Route>
        </Switch>

        </CartProvider>


      </header>

      </Router>
    )
  }
}

