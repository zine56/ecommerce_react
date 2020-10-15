import React,{Component} from 'react';

import './App.css';

import AppRoutes  from './routes/routes';

export default class App extends Component {

  render (){

    return (
    <div className="App">
      <AppRoutes/>
    </div>)
  }
}

