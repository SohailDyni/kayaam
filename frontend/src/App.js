import React, { Component } from 'react';
import logo from './logo.svg';
import 'assets/css/bootstrap.min.css';
import './App.css';
import Navigator from './Navigator';

class App extends Component {
  render() {
    return (
		<Navigator />
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       hi
    //     </p>
    //   </div>
    );
  }
}

export default App;
