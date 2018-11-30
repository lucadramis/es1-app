import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Home from './components/home.js'
import About from './components/about.js'
import Contact from './components/contact.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Menu from './components/menu'



class App extends Component {
  constructor(props) {
    super (props);
  }
  

  render() {
    return (
    <div>
      <Menu />
      </div>
      
      
    );
  }
}

export default App;
