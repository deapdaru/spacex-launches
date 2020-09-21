import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}>
        <code>Made using React(create-react-app), Axios(async/await), React Routers, SpaceX API and Material UI</code><br/>
        <code>By Deap Daru.</code>
      </footer>
    );
  }
}

const footerStyle = {
  textAlign: "center",
  fontSize: "0.75em",
  padding: "10px 0"
}

export default Footer;
