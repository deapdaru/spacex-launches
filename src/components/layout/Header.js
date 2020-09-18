import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1 style={titleStyle}>SpaceX Launches</h1>
      </header>
    );
  }
}

const headerStyle = {
  backgroundColor: "#2196f3",
  padding: "40px"
}

const titleStyle = {
  fontSize: "3.5em",
  color: "#fff",
  textDecoration: "none",
  textAlign: "center"
}

export default Header;