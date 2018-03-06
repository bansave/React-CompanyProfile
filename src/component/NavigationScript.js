import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavigationScript.css';
class NavigationScript extends Component {
  render() {
    return (
      <div className="NavigationScript">
        <div className="container-fluid">
          <div className="row navibody">
            <img className='logo' src={require('./picture/Stdio95.jpg') } />
            <button><Link to="/">Home</Link></button>
            <span>    </span>
            <button><Link to="/about">About Us</Link></button>
            <span>    </span>
            <button><Link to="/project">Our Project</Link></button>
            <span>    </span>
            <Link to="/contact"><button>Contact Us</button></Link>
            
          </div>
        </div>
          
      
        
      </div>  
    );
  }
}

export default NavigationScript;
