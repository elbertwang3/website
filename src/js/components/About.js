import React, { Component } from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class About extends Component {

  render() {
    return (
      <div className="aboutme">Hi, I'm Elbert. I recently graduated from Brown University,
        where I studied Computer Science and Classics. I'm interested in data journalism, visualization, and storytelling.
      I am currently a data journalist at Dremio, a software company, where I use the company's product to analyze datasets
    and create visualizations and stories. This summer, I'll be a intern at the SF Chronicle building charts and interactives
    on their digital team. Feel free to contact me at elbertwang1@gmail.com. </div>
    );
  }
}

export default About;
