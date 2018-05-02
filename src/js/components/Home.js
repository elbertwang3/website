import React, { Component } from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {
  componentDidMount() {
    var body = document.body,
    html = document.documentElement;

    var totalHeight = Math.max(window.innerHeight, html.offsetHeight);
    console.log(totalHeight)

  }
  render() {

    return (
    /*<GameofLife />*/

      <div className="title">
        <h1> Elbert Wang </h1>
      </div>
    );
  }
}

export default Home;
