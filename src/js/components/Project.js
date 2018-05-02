import React, { Component } from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';

class Project extends Component {
  componentDidMount() {
    var body = document.body,
    html = document.documentElement;

    var totalHeight = html.offsetHeight;
    console.log(totalHeight)
    $('.description').each(function(){//for each paragraph
      $(this).css("bottom", -$(this).outerHeight()/2 +"px");
   //change its parent   margin-top   with the current p's outerHeight
    })
  }
  render() {
    
    const {projectName, projectCaption, imageSrc, projectLink, forWhom} = this.props
    return (
      <div className="project-container">
        <a href={projectLink}>
          <div className="project">
            <div className="img-container">
              <img src={imageSrc}></img>
            </div>
            <div className="description">
              <div className="project-name">
                {projectName}
              </div>

              <div className="project-caption">
                {projectCaption}
              </div>
            </div>
            <div className="for-whom">
              {forWhom}
            </div>

          </div>
        </a>

      </div>
    );
  }
}

export default Project;
