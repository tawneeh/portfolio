import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/me1.jpg';

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1 id="myName">TAWNEE HARRIS</h1>
        <img src={ profilepic } className="profilepic" alt="Tawnee Harris"></img>
        <br />
        <br />
        <ReactTypingEffect className="typingeffect" text={['Hi! My name is Tawnee','I develop software']} speed={100} eraseDelay={700} />
      </div>
    )
  }
}

export default Home;