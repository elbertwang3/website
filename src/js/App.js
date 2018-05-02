import React, { Component } from 'react';
import '../css/App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Canvas from './components/Canvas.js';
import $ from 'jquery';

class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Canvas />
        <div className="main">

          <NavBar />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </div>
      </div>
      </Router>


    );
  }
}

const NavBar = () => (

  <div className="nav-bar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
    </ul>
  </div>




)
export default App;
