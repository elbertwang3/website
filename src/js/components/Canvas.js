import React, { Component } from 'react';
import '../../css/App.css';
import ReactDOM from 'react-dom';
import * as THREE from '../scripts/three.js';
import $ from 'jquery';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Canvas extends Component {

  componentDidMount() {

    var body = document.body,
    html = document.documentElement;

    var totalHeight = window.innerHeight;
    var mouseX = 0, mouseY = 0,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = totalHeight / 2,
    SEPARATION = 200,
    AMOUNTX = 10,
    AMOUNTY = 10,
    camera, scene, renderer;
    init();
    animate();
    onWindowResize();
    function init() {
      var container, separation = 100, amountX = 50, amountY = 50,
      particles, particle;
      container = document.getElementById("canvas-container")
      camera = new THREE.PerspectiveCamera( 75, window.innerWidth / totalHeight, 1, 10000 );
      camera.position.z = 100;
      scene = new THREE.Scene();
      renderer = new THREE.CanvasRenderer();

      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth,totalHeight);
      console.log(renderer.domElement)
      container.appendChild( renderer.domElement );
      // particles
      var PI2 = Math.PI * 2;
      var material = new THREE.SpriteCanvasMaterial( {
        color: 0xffffff,
        program: function ( context ) {
          context.beginPath();
          context.arc( 0, 0, 0.5, 0, PI2, true );
          context.fill();
        }
      } );
      var points = [];
      for ( var i = 0; i < 100; i ++ ) {
        particle = new THREE.Sprite( material );
        particle.position.x = Math.random() * 2 - 1;
        particle.position.y = Math.random() * 2 - 1;
        particle.position.z = Math.random() * 2 - 1;
        particle.position.normalize();
        particle.position.multiplyScalar( Math.random() * 10 + 450 );
        particle.scale.x = particle.scale.y = 10;
        scene.add( particle );
        points.push( particle.position );
      }
      // lines
      var geometry = new THREE.BufferGeometry().setFromPoints( points );
      var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
      scene.add( line );
      document.addEventListener( 'mousemove', onDocumentMouseMove, false );
      document.addEventListener( 'touchstart', onDocumentTouchStart, false );
      document.addEventListener( 'touchmove', onDocumentTouchMove, false );
      //
      window.addEventListener( 'resize', onWindowResize, false );
      setTimeout(function(){ onWindowResize() }, 220);

    }
    function onWindowResize() {
      console.log("being called")

      console.log(totalHeight)
      totalHeight = window.innerHeight
      console.log(totalHeight)
      windowHalfX = window.innerWidth / 2;
      windowHalfY = totalHeight / 2;
      camera.aspect = window.innerWidth / totalHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, totalHeight );
    }
    //
    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }
    function onDocumentTouchStart( event ) {
      if ( event.touches.length > 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
      }
    }
    function onDocumentTouchMove( event ) {
      if ( event.touches.length == 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
      }
    }
    //
    function animate() {
      requestAnimationFrame( animate );
      render();
    }
    function render() {
      camera.position.x += ( mouseX - camera.position.x ) * .05;
      camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
      camera.lookAt( scene.position );
      renderer.render( scene, camera );
    }


  }
  render() {
    return (
      <div id="canvas-container"></div>
    );
  }
}

export default Canvas;
