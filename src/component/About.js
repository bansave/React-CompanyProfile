import React, { Component } from 'react';
import './About.css';
class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>About Us</h1>
        <p>We're a bunch of passionate Students.</p>
        <p>Our goal is to make game that we desired.</p>
        <hr/>
        <h2>Our Member</h2>
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-xs-12 col-sm-3">
                <img className='member' src={require('./picture/purwadhika 8649.jpg') } />
                <h3>Bintang S</h3>
                <p>CEO</p>
                <p>Code lvl: 7</p>
                <p>Design lvl: 4</p>
                </div>
                <div className="col-xs-12 col-sm-3">
                <img className='member' src={require('./picture/purwadhika 8661.jpg') } />
                <h3>Stanley P</h3>
                <p>Designer</p>
                <p>Code lvl: 2</p>
                <p>Design lvl: 8</p>
                </div>
                <div className="col-xs-12 col-sm-3">
                <img className='member' src={require('./picture/purwadhika 8640.jpg') } />
                <h3>Raynaldo</h3>
                <p>Coder</p>
                <p>Code lvl: 7</p>
                <p>Design lvl: 6</p>
                </div>
                <div className="col-xs-12 col-sm-3">
                <img className='member' src={require('./picture/purwadhika 8665.jpg') } />
                <h3>Frans K</h3>
                <p>Coder</p>
                <p>Code lvl: 9</p>
                <p>Design lvl: 5</p>
                </div>
            </div>
            <hr/>
            <div className='container'>
                <img className='Group' src={require('./picture/purwadhika 8427.jpg') } />
                <h2>Why Stdio95?</h2>
                <p>The reason is very simple, it's because all of us born at 1995.</p>
                <p>And when we first learn about code the first thing we write were std.io</p>
            </div>
        </div>
        
      </div>
    );
  }
}

export default About;