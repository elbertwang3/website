import React, { Component } from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project from './Project.js'
import $ from 'jquery';
import * as d3 from 'd3';


class Work extends Component {

  constructor(props){

    super(props);

    this.state = {
      images: null,
      projects: null,
    }
  }

  componentWillMount() {
    const images = this.importImages(require.context('../../images/', false, /\.(png|jpg|gif|mp4)$/));
  	this.setState({images: images})
  }
  importImages(r) {

    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  componentDidMount() {
    const that = this
    var body = document.body,
    html = document.documentElement;


    d3.csv("data/projects.csv").then(function(data) {
      that.setState({projects: data})
    })
  
  }
  render() {
    const {images, projects} = this.state
    const that = this
    let projectsDivs
    if (images && projects) {
     
      projectsDivs = projects.map(d => <Project projectName={d['projectName']} projectCaption={d['projectCaption']} imageSrc={images[`${d['imagesrc']}`]} projectLink={d['projectlink']} forWhom={d['forwhom']} show={d['projectName'] != ""} />) 

    }
    
    
    
    return (
      <div className="projects-container">
        {/*<Project projectName="Serena the Great"
        projectCaption="Why Serena Williams is the greatest tennis player of all time"
        imageSrc={images['serena.gif']}
        projectLink="http://elbertwang3.github.io/serena"
        forWhom="Dremio"/>
        <Project projectName="The Winter Olympics"
        projectCaption="Visualizing all of the medalists from the Winter Games"
        imageSrc={images['winterolympics.png']}
        projectLink="https://www.dremio.com/the-winter-olympics/"
        forWhom="Dremio" />
        <Project projectName="The Himalayas"
        projectCaption="Exploring the world's tallest mountain range"
        imageSrc={images['himalayas.png']}
        projectLink="http://elbertwang3.github.io/himalayas"
        forWhom="personal project"/>
        <Project projectName="The Senate special election in Alabama"
        projectCaption="A look into how Doug Jones turned the crimson tide in Alabama"
        imageSrc={images['alabama.png']}
        projectLink="http://elbertwang3.github.io/alabamasenateelection"
        forWhom="personal project"/>
        <Project projectName="Previewing Figure Skating at the Winter Olympics"
        projectCaption="A visual explainer of the gravity-defying jumps that define figure skating"
        imageSrc={images['figureskatingolympics.png']}
        projectLink="http://elbertwang3.github.io/figureskatingolympics"
        forWhom="personal project"/>
        <Project projectName="How to spot a frontrunner on America's Next Top Model"
        projectCaption="What does it take to be on top?"
        imageSrc={images['antm.gif']}
        projectLink="http://elbertwang3.github.io/antm"
        forWhom="personal project"/>*/}
        {projectsDivs}
      </div>
    );
  }
}

export default Work;
