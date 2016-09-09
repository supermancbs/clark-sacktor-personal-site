import React, { Component } from 'react';
import './App.css';
import NavBar from './components/container/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <NavBar/>
        </div>
        <div className="middle">
          {this.props.children}
        </div>
        <div className="bottom">

        </div>
      </div>
    );
  }
}

export default App;
