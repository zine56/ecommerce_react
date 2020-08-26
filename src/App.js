import React from 'react';
import NavBar from "./components/NavBar";
import { CartProvider } from "./components/CartContext";
import { CounterProvider } from "./components/CounterContext";

import Home from "./components/Home";
import Card from 'react-bootstrap/Card';
import { ProductList } from './components/ProductList';

import logo from './logo.svg';
import './App.css';
import { LikeButton } from './components/LikeButton';
import { LikeCounter } from './components/LikeCounter';


function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <CartProvider>
        <NavBar/>
        <ProductList/>
        <div>
          <div>
            tienda con bootstrap :D
            <CounterProvider>
              <LikeButton/>
              <LikeCounter/>
            </CounterProvider>            
          </div>            
          <div>
              <Home greeting="Greetings earthlings @_@" />
          </div>              
        </div>
        </CartProvider>


      </header>
    </div>
  );
}

export default App;
