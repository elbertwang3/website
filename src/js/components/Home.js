import React, { Component } from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {
  constructor(props){

    super(props);

    this.state = {
      images: null,
    }
  }

  componentWillMount() {
    const images = this.importImages(require.context('../../images/', false, /\.(jpg)$/));
    this.setState({images: images})
  }
  importImages(r) {

    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  render() {
    const {images} = this.state
    console.log(images)
    console.log(images['1.jpg'])
    return (
   
      
      <div>
        hello
      </div>
    );
  }
}

export default Home;
