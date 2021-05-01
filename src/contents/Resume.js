import React, { Component } from 'react';
import resume from '../img/resume.png';

class Resume extends Component {
  render() {
    return (
      <div className="condiv">
        <h2 style={{ textAlign: 'center' }}><em><a href="mailto:tawneeh@icloud.com">Email Tawnee</a></em></h2>
        <img src={ resume } className="resumeImg" alt="My Resume"></img>
      </div>
    )
  }
}

export default Resume;