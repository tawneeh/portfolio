import React, { Component } from 'react';
import resume from '../img/resume.png';

class Resume extends Component {
  render() {
    return (
      <>
        <img src={ resume } className="resumeImg" alt="My Resume"></img>
      </>
    )
  }
}

export default Resume;

// work on styling this