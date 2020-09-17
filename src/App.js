import React,{Component} from 'react';
import NavBar from "./components/NavBar";
import { CartProvider } from "./components/CartContext";
import { CounterProvider } from "./components/CounterContext";

import Home from "./components/Home";
import Card from 'react-bootstrap/Card';
import { ItemList } from './components/ProductList';

import { Item } from './components/Item';

import logo from './logo.svg';
import './App.css';
import { LikeButton } from './components/LikeButton';
import { LikeCounter } from './components/LikeCounter';

import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
export default class App extends Component {

  constructor() {
    super();
    console.log('constructor()');
    this.state = {
      data:[]
    }
  }
  componentDidMount() {
    

    let promise = new Promise((resolve,reject)=>{
      setTimeout(function(){
        resolve([
          {name:'Gladiator',stock:100,price:10000,id:1,img:'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'},
          {name:'Men in black',stock:100,price:12000,id:2,img:'https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
          {name:'Happy Gilmore',stock:100,price:7000,id:3,img:'https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'},
        ])
      },5000)
    })


   promise.then( result => {
      this.setState({data:result}) 
   }, function(error) {
      this.setState({data:[]}) 
   });


  }
  render (){



    return (
    <div className="App">
      <BrowserRouter>

      <header className="App-header">        
        <CartProvider>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <ItemList products={this.state.data} />


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

        <Route path='/product/:id'>
              <Item data={this.data} />
        </Route>
        </Switch>

        </CartProvider>


      </header>

      </BrowserRouter>

    </div>)
  }
}

