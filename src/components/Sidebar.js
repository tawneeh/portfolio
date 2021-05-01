import React, { Component } from 'react';
import Navitem from './Navitem';
import bulb from '../img/lightbulb.png';

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
            <img src={bulb} className="lightbulb" alt="lightbulb"></img>
            <Navitem item="HOME" tolink="/" activec={this.activeitem}></Navitem>
            <Navitem item="ABOUT" tolink="/about" activec={this.activeitem}></Navitem>
            <Navitem item="SKILLS" tolink="/skills" activec={this.activeitem}></Navitem>
            <Navitem item="RESUME" tolink="/resume" activec={this.activeitem}></Navitem>
          </ul>
        </nav>
      )
    }
  }

  export default Sidebar;