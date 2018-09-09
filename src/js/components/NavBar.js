import React, { Component } from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
  componentDidMount() {
    
  }
  render() {
    
   

    return (
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
      
    );
  }
}

export default NavBar;
