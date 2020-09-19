import React, { Component } from 'react';

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
  textAlign: "center",
  fontStyle: "italic"
}

export default Header;