import React,{Component} from 'react';
import NavBar from "./components/NavBar";
import { CartProvider } from "./components/CartContext";
import { CounterProvider } from "./components/CounterContext";

import Home from "./components/Home";
import ItemList from './components/ItemList';

import ItemDetail from './components/ItemDetail';

import './App.css';
import { LikeButton } from './components/LikeButton';
import { LikeCounter } from './components/LikeCounter';

import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CartList } from './components/CartList';

export default class App extends Component {

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
        <Route exact path='/item/:id' component={ItemDetail}>
        </Route>
        <Route exact path='/categories/:categoryId' component={ItemList}>
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

