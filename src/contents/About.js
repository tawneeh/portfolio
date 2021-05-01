import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="condiv">
          <h1>About Tawnee</h1>
          <h3 style={{ color: '#6dd0db' }}>Junior Software Developer || Certificate in Web and Mobile Development</h3>
          <br />
          <p>Tawnee Harris is a Junior Developer living in the Seattle area. She is a recent Epicodus graduate interested primarily in data engineering and is extremely eager to continue learning!</p>
          <br />
          <p>Tawnee custom built this website using React.js to showcase her coding abilities. Enjoy perusing the site to your heart's content! If you would like to see more of Tawnee's work, please check out her GitHub. </p>
          <a href="https://github.com/tawneeh"><em>GitHub</em></a>
          <br />
          <br />
          <p>Head over to LinkedIn and connect with Tawnee!</p>
          <a href="https://www.linkedin.com/in/tawneeh/"><em>LinkedIn</em></a>
      </div>
    )
  }
}

export default About;