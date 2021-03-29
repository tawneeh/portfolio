import React, { Component } from 'react';
import Card from '../components/Card';

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Education</h1>
          <Card title="Web and Mobile Development" where="Epicodus School for Tech Careers" url="www.epicodus.com" from="October 2020" to="March 2021" />
      </div>
    )
  }
}

export default Education;