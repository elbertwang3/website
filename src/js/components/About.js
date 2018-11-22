import React, { Component } from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class About extends Component {

  render() {
    return (
      <div className="aboutme">
      	<p>Hi, I'm Elbert. I'm a recent graduate of Brown University,
        where I studied Computer Science and Classics. In college, I learned to code and to write; as a journalist, 
        I get to tell stories with code. I am interested in distilling data into graphics and visualizations and 
        in digging into the numbers to understand the people behind them.</p>

       	<p>I am currently a fellow on the data visuals team 
        at <a href="https://www.texastribune.org/" target="_blank">The Texas Tribune</a>, a nonprofit media
        organization covering Texas politics and policy. Previously, I was a data journalist
        at <a href="https://www.dremio.com/" target="_blank">Dremio</a>, a data-as a service-company in Mountain View, where I used the company's technology
        to analyze datasets and write visual stories. This summer, I was an intern at 
        the <a href="https://www.sfchronicle.com/" target="_blank">San Francisco Chronicle</a>, 
        where I built charts and tools on the interactives team.</p>

        <p>Feel free to contact me through <a href="mailto:elbertwang1@gmail.com">e-mail</a> or on <a href="https://twitter.com/elbertwang1" target="_blank">Twitter</a>, or 
       check out my <a href="/work">work</a>.</p>
       </div>
    );
  }
}

export default About;
