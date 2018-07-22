import React, { Component } from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class About extends Component {

  render() {
    return (
      <div className="aboutme">
      	<p>Hi, I'm Elbert. I am a recent graduate of Brown University,
        where I studied Computer Science and Classics. At Brown, I learned how to code and to write, giving me the tools
        to tell stories with code, and fostering in me an interest in data journalism, visualization, and storytelling.</p>
       	<p>I am currently an intern at the San Francisco Chronicle, where I'm building charts and tools on the interactives team . This fall,
       	 I will be a fellow on the Data Visuals team at the Texas Tribune. I used to work at <a href="https://www.dremio.com/" target="_blank">Dremio</a> as
       	 a data journalist, where I used the company's technology
        to analyze datasets and write visual stories.</p>
        <p>I am currently looking for full-time opportunities for 2019.
       Feel free to contact me at elbertwang1@gmail.com or check out my work.</p>
       </div>
    );
  }
}

export default About;
