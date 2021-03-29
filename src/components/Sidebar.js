import React, { Component } from 'react';
import Navitem from './Navitem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

class Sidebar extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      'NavItemActive':''
    }
  }

  activeitem=(x)=>
  {
    if(this.state.NavItemActive.length>0){
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({'NavItemActive':x},()=>{
      document.getElementById(this.state.NavItemActive).classList.add('active');
    });
  };

  render() {
    return (
        <nav>
          <ul>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem>
            <Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
          </ul>
            <a href="https://www.linkedin.com/in/tawneeh/"
              className="linkedin social">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/tawneeh/"
              className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </nav>
      )
    }
  }

  export default Sidebar;