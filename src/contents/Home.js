import React, { Component } from 'react';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/me1.jpg';

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} className="profilepic" alt="Tawnee Harris"></img>
        <br />
        <br />
        <ReactTypingEffect className="typingeffect" text={['Hi! I am Tawnee','I develop software']} speed={100} eraseDelay={700} />
        <Social />
      </div>
    )
  }
}

export default Home; // want a much better splash page