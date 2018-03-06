import React, { Component } from 'react';
import './Project.css';
class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="container-fluid">
            <div className='row'>
                <div className="col-xs-12 col-sm-3">
                <img className='product' src={require('./picture/Puyo.png') } />
                <h3>Puyo!</h3>
                <p>CEO</p>
                <p>Code lvl: 7</p>
                <p>Design lvl: 4</p>
                </div>
                <div className="col-xs-12 col-sm-3">
                <img className='product' src={require('./picture/Packoto.png') } />
                <h3>Packoto</h3>
                <p>Designer</p>
                <p>Code lvl: 2</p>
                <p>Design lvl: 8</p>
                </div>
                <div className="col-xs-12 col-sm-3">
                <img className='product' src={require('./picture/AncientAnihilation.png') } />
                <h3>Ancient Annihilation</h3>
                <p>Coder</p>
                <p>Code lvl: 7</p>
                <p>Design lvl: 6</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Project;