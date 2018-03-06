import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Main from './component/Main.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Project from './component/Project.js';
import NavigationScript from './component/NavigationScript';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationScript/>
        <div className="AppBody">
          <Route path="/" component={"home"}/>
          <Route path="/about" component={About}/>
          <Route path="/project" component={Project}/>          
          <Route path="/contact" component={Contact}/>
        </div>
      </div>
    );
  }
}

export default App;
