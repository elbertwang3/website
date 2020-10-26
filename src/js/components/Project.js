import React, { Component } from "react";
import "../../css/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Project extends Component {
  componentDidMount() {}
  render() {
    const {
      projectName,
      projectCaption,
      imageSrc,
      projectLink,
      forWhom,
    } = this.props;
    //let visibility = show ? "visible" : "hidden"
    //const style = {visibility: visibility}
    const jsonPattern = new RegExp(".mp4$");
    let img;
    console.log(imageSrc);
    if (jsonPattern.test(imageSrc)) {
      img = (
        <video preload="true" autoPlay="autoplay" loop="loop">
          <source src={imageSrc} type="video/mp4"></source>
        </video>
      );
    } else {
      img = <img src={imageSrc}></img>;
    }

    return (
      <div className="project-container">
        <a className="image-link" target="_blank" href={projectLink}>
          <div className="project">
            <div className="img-container">{img}</div>
            <div className="description">
              <div className="for-whom">{forWhom}</div>
              <div className="project-name">{projectName}</div>

              <div className="project-caption">{projectCaption}</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Project;
