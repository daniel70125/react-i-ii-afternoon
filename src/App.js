import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import InfoBox from './components/InfoBox'
import Data from './Data'

class App extends Component {
  constructor(){
    super();

    this.state = {
      

    }
  }
  

  render(){
    return (
      <div>
        <Header className="Header" />
        <InfoBox elm={this.state.employees} />
      </div>
    )
  }

}

export default App;
