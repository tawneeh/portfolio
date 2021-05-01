import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/me1.jpg';

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1 id="myName"><span className="dropCap">T</span>AWNEE <span className="dropCap">H</span>ARRIS</h1>
        <div className="image image-colorize">
          <img src={ profilepic } alt="Tawnee Harris"></img>
        </div>
        <br />
        <br />
        <ReactTypingEffect className="typingeffect" text={['Hi! My name is Tawnee','I develop software']} speed={100} eraseDelay={700} />
      </div>
    )
  }
}

export default Home;