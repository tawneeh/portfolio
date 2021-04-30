import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navitem extends Component {
  render() {
    return (
      <li id={this.props.item}>
        <Link style={{ color: "#6dd0db", textDecoration: 'none', fontFamily: 'Impact' }} to={this.props.tolink} onClick={this.props.activec.bind(this, this.props.item)}>{this.props.item}</Link>
      </li>
    )
  }
}

export default Navitem;